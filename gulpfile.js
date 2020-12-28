var gulp = require('gulp')
var clean = require('gulp-clean')
var rename = require('gulp-rename')
var header = require('gulp-header')
var documentation = require('gulp-documentation')
var mergeStream = require('merge-stream')
var ts = require('gulp-typescript')
var fs = require('fs')

var tsConfig = {
  module: 'amd',
  target: 'es6',
  lib: ['es6', 'dom', 'es2016', 'es2017'],
  moduleResolution: 'node',
  noEmitHelpers: true,
  resolveJsonModule: true,
  allowSyntheticDefaultImports: true,
}

var packages = [
  {
    module: 'xchain-crypto',
    path: 'xchain-crypto/available-functions',
  },
  {
    module: 'xchain-util',
    path: 'xchain-util/available-functions',
  },
  {
    module: 'xchain-bitcoin',
    path: 'xchain-client/xchain-bitcoin/available-functions',
  },
  {
    module: 'xchain-binance',
    path: 'xchain-client/xchain-binance/available-functions',
  },
  // Currently commented out xchain-ethereum
  // {
  //   module: 'xchain-ethereum',
  //   path: 'xchain-client/xchain-ethereum/available-functions',
  // },
  {
    module: 'xchain-cosmos',
    path: 'xchain-client/xchain-cosmos/available-functions',
  },
  {
    module: 'xchain-polkadot',
    path: 'xchain-client/xchain-polkadot/available-functions',
  },
  {
    module: 'xchain-thorchain',
    path: 'xchain-client/xchain-thorchain/available-functions',
  },
]

function getGeneratedFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file !== 'README.md')
    .map((file) => `${dir}/${file}`)
}

function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function getTitle(filename) {
  return filename
    .split('-')
    .map((item) => capitalizeFirstLetter(item))
    .join(' ')
}

function cleanAll() {
  var files = ['lib']

  packages.forEach((item) => {
    files.push(...getGeneratedFiles(item.path))
  })

  return gulp.src(files, { read: false, allowEmpty: true }).pipe(clean())
}

function cleanLib() {
  return gulp.src('lib', { read: false, allowEmpty: true }).pipe(clean())
}

function xchain_lib_build(lib) {
  return gulp
    .src(`xchainjs-lib/packages/${lib}/src/*.ts`)
    .pipe(
      ts({
        ...tsConfig,
        rootDir: `xchainjs-lib/packages/${lib}`,
      })
    )
    .js.pipe(gulp.dest(`lib/${lib}`))
}

function xchain_lib_documentation(lib, dest) {
  return mergeStream(
    ...fs
      .readdirSync(`lib/${lib}`)
      .filter((file) => !file.endsWith('.test.js') && file !== 'index.js')
      .map((file) =>
        gulp
          .src(`lib/${lib}/${file}`)
          .pipe(documentation('md'))
          .pipe(rename(`${file.split('.').slice(0, -1).join('.')}.md`))
          .pipe(
            header(`# ${getTitle(file.split('.').slice(0, -1).join('-'))}\n\n`)
          )
          .pipe(gulp.dest(`${dest}`))
      )
  )
}

function buildAll() {
  return mergeStream(...packages.map((item) => xchain_lib_build(item.module)))
}

function documentationAll() {
  return mergeStream(
    ...packages.map((item) => xchain_lib_documentation(item.module, item.path))
  )
}

exports.clean = gulp.series(cleanAll)

exports.build = gulp.series(buildAll)

exports.build = gulp.series(documentationAll)

exports.default = gulp.series(cleanAll, buildAll, documentationAll, cleanLib)
