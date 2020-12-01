---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-util
```

The following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-util`.

```
yarn add bignumber.js
```

## Development

### Build

```bash
yarn build
```

### Tests

```bash
yarn test
```

### `asset` - Utilities for handling assets

Default number of asset decimals:
```js
const ASSET_DECIMAL = 8
```

Major types for `amounts` and `assets` used in `asset`:
```js
type Amount<T> = {
  type: T
  amount: () => BigNumber
  decimal: number
}
type BaseAmount = Amount<Denomination.BASE>
type AssetAmount = Amount<Denomination.ASSET>
type Amounts = AssetAmount | BaseAmount

type Asset = {
  chain: Chain
  symbol: string
  ticker: string
}
```

#### `assetAmount`
Factory to create values of assets (e.g. RUNE)

Parameters:
* `value` - Asset amount - If the value is undefined, AssetAmount with value `0` will be returned
* `decimal` (optional) - Decimal places - default 8

#### `baseAmount`
Factory to create base amounts (e.g. tor)

Parameters:
* `value` - Base amount - If the value is undefined, BaseAmount with value `0` will be returned
* `decimal` (optional) - Decimal places - default 8

#### `baseToAsset`
Helper to convert values for a asset from base values (e.g. RUNE from tor)

#### `assetToBase`
Helper to convert asset to base values (e.g. tor -> RUNE)

#### `isAssetAmount`
Guard to check whether value is an amount of asset or not

#### `isBaseAmount`
Guard to check whether value is an amount of a base value or not

#### `formatAssetAmount`
Formats an `AssetAmount` into `string` based on decimal places

Parameters:
* `amount` - Asset amount to be formatted
* `decimal` (optional) - Asset amount to be formatted
* `trimZeros` (optional) - if `decimal` is not set, `amount.decimal` is used

#### `formatBaseAmount`
Formats a `BaseAmount` value into a `string`

#### `isValidAsset`
Helper to check whether asset is valid

Parameters:
* `asset` - Asset to be checked

#### `assetFromString`
Creates an `Asset` by a given string

This helper function expects a string with following naming convention: 

`AAA.BBB-CCC`

where

chain: `AAA`

ticker (optional): `BBB`

symbol: `BBB-CCC` or `CCC` (if no ticker available)

If the naming convention fails, it returns null

#### `assetToString`
Returns an `Asset` as a string using following naming convention:

`AAA.BBB-CCC`

where

chain: `AAA`

ticker (optional): `BBB`

symbol: `BBB-CCC` or `CCC` (if no ticker available)

#### `currencySymbolByAsset`
Returns currency symbols by given `Asset`

#### `formatAssetAmountCurrency`
Formats an asset amount using its currency symbol

Parameters:
* `amount` - Asset amount to be formatted
* `asset` (optional) - If `asset` is not set, `$` will be used as currency symbol by default
* `decimal` (optional) - If `decimal` is not set, `amount.decimal` is used
* `trimZeros` (optional) - `trimZeros` is `false` by default

Note: `trimZeros` wins over `decimal`

#### `formatBaseAsAssetAmount`
Formats a `BaseAmount` into a string of an `AssetAmount`

Parameters:
* `amount` - Base amount to be formatted
* `decimal` (optional) - If `decimal` is not set, `amount.decimal` is used
* `trimZeros` (optional) - `trimZeros` is `false` by default

### `async` - Utitilies for `async` handling

#### `delay`
Helper to delay anything within an `async` function

Example: 
```js
const anyAsyncFunc = async () => {
  // do something
  console.log('before delay')
  // wait for 200ms
  await delay(200)
  // and do other things
  console.log('after delay')
}
```

### `bn` - Utitilies for using `bignumber.js`

#### `bn`
Shortcut to create a BigNumber

#### `isValidBN`
Helper to check whether a BigNumber is valid or not

#### `bnOrZero`
Helper to create a big number from string or number

If it fails to create a big number, a big number with value 0 will be returned instead

#### `validBNOrZero`
Helper to validate a possible BigNumber

If the given valie is invalid or undefined, 0 is returned as a BigNumber

#### `formatBN`
Format a BaseNumber to a string depending on given decimal places

Parameters:
* `value` - `BigNumber` to be formatted
* `decimalPlaces` (optional) - Default decimal place is 2

#### `formatBNCurrency`
Formats a big number value by prefixing it with `$`

Parameters:
* `value` - `BigNumber` to be formatted
* `decimalPlaces` (optional) - Default decimal place is 2
* `symbol` (optional) - Default symbol is `$`
* `position` (optional) - `before` or `after`, default posotion is `before`

#### `fixedBN`
Helper to get a fixed `BigNumber`

Returns zero `BigNumber` if `value` is invalid

Parameters:
* `value` - Value to be formatted
* `decimalPlaces` (optional) - Default decimal place is 2

### `chain` - Utilities for multi-chain

Following chains are available:
```js
const BNBChain = 'BNB'
const BTCChain = 'BTC'
const ETHChain = 'ETH'
const THORChain = 'THOR'
```

#### `isChain`
Type guard to check whether string  is based on type `Chain`

#### `chainToString`
Helper to get chain name from chainid

### `string` - Utilities for strings

#### `trimZeros`
Removes leading / trailing zeros from a string of numbers
