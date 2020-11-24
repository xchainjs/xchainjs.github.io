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

## BigNumber

```
import bn, {
  isValidBN,
  bnOrZero,
  validBNOrZero,
  formatBN,
  formatBNCurrency,
  fixedBN
} from '@xchainjs/xchain-util'
```

## Async

```
import delay from '@xchainjs/xchain-util'
```

## Calculations-Staking

```
import {
  PoolData,
  getSwapOutput,
  getSwapOutputWithFee,
  getSwapInput,
  getSwapSlip,
  getSwapFee,
  getValueOfAssetInRune,
  getValueOfRuneInAsset,
  getDoubleSwapOutput,
  getDoubleSwapOutputWithFee,
  getDoubleSwapInput,
  getDoubleSwapSlip,
  getDoubleSwapFee,
  getValueOfAsset1InAsset2,
} from '@xchainjs/xchain-util'
```

## Calculations-Swapping

```
import {
  UnitData,
  StakeData,
  getStakeUnits,
  getPoolShare,
  getSlipOnStake
} from '@xchainjs/xchain-util'
```

## Asset Helpers

```
import {
  assetAmount,
  baseAmount,
  isAssetAmount,
  isBaseAmount,
  baseToAsset,
  assetToBase,
  formatAssetAmount,
  formatBaseAsAssetAmount,
  formatAssetAmountCurrency,
} from '@xchainjs/xchain-util'
```
