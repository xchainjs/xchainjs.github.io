---
sort: 2
---

# How to use

## Installation
```bash
yarn add @xchainjs/xchain-mayachain-amm
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-mayachain-amm`
Add this to the package.json and then run `yarn`
```ts
  "devDependencies": {
    "@cosmos-client/core": "0.46.1",
    "@psf/bitcoincashjs-lib": "^4.0.3",
    "@xchainjs/xchain-bitcoin": "^0.23.9",
    "@xchainjs/xchain-client": "^0.16.0",
    "@xchainjs/xchain-cosmos-sdk": "^0.1.5",
    "@xchainjs/xchain-crypto": "^0.3.0",
    "@xchainjs/xchain-dash": "^0.2.8",
    "@xchainjs/xchain-ethereum": "^0.31.3",
    "@xchainjs/xchain-mayanode": "^0.1.2",
    "@xchainjs/xchain-mayachain-query": "^0.1.3",
    "@xchainjs/xchain-evm": "^0.4.3",
    "@xchainjs/xchain-kujira": "^0.1.5",
    "@xchainjs/xchain-mayachain": "^0.2.13",
    "@xchainjs/xchain-mayamidgard": "^0.1.0",
    "@xchainjs/xchain-thorchain": "^0.28.16",
    "@xchainjs/xchain-util": "^0.13.1",
    "@xchainjs/xchain-utxo": "^0.1.1",
    "@xchainjs/xchain-utxo-providers": "^0.2.10",
    "axios": "^1.3.6",
    "axios-retry": "^3.2.5",
    "bignumber.js": "^9.0.0",
    "bitcoinjs-lib": "5.2.0",
    "coininfo": "^5.1.0",
    "coinselect": "^3.1.12",
    "dotenv": "^16.0.0",
    "ethers": "^5.6.6",
    "wif": "^2.0.6"
  },
```

## Typescript compiler options
Add new file to project called `tsconfig.json`
Add the following options to the file
```ts
{
    "compilerOptions": {
        "module":"commonjs",
        "target": "es5",
        "noEmitOnError": true,
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "lib": ["es6", "dom", "es2016", "es2017"]
    }
}
```

## Examples

Examples using the module

- [Do maya swap](https://github.com/xchainjs/xchainjs-lib/blob/master/examples/do-maya-swap/do-maya-swap.ts)

