---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-thorchain-query
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-thorchain-query`.

```
yarn add @xchainjs/xchain-client @xchainjs/xchain-util @xchainjs/xchain-midgard @xchainjs/xchain-thornode axios

```


## Thorchain-query Client Testing

```bash
yarn install
yarn test
```

## Basic usage examples
```ts
//Imports
import { AssetBTC, AssetBCH} from '@xchainjs/xchain-util';
import { assetToBase,assetAmount, assetFromString, AssetRuneNative } from '@xchainjs/xchain-util';
import { EstimateSwapParams, ThorchainQuery, ThorchainCache, Midgard, Thornode, CryptoAmount, TxDetails} from "@xchainjs/xchain-thorchain-query"
import { Network } from "@xchainjs/xchain-client"

```

### Estimate a single swap 
```ts
// Instantiate a new ThorchainQuery class with api's
const thorchainCache = new ThorchainCache(new Midgard(Network.Mainnet), new Thornode(Network.Mainnet))

// Estimate a swap from USDC to RUNE
// Create asset from string
const assetUSDC = assetFromString('ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48')
const estimateSwapUSDC = async () => {
    const swapParams: EstimateSwapParams = {
        input: new CryptoAmount(assetToBase(assetAmount(1000, 6)), assetUSDC),
        destinationAsset: AssetRuneNative,
        destinationAddress: 'xxx',
      }
    const estimate = await thorchainQuery.estimateSwap(swapParams)
    printTx(estimate, swapParams.input)
}

// Output
{
  memo: '=:THOR.RUNE:xxx:60998441999',
  expiry: 2022-09-22T13:05:18.228Z,
  toAddress: '0xd4a4b93bccf726c0ee1b8e1e90db064488115513',
  txEstimate: {
    input: '$ 1,000',
    totalFees: {
      inboundFee: 'ᚱ 1.68221325',
      swapFee: 'ᚱ 0.21331135',
      outboundFee: 'ᚱ 0.06',
      affiliateFee: 'ᚱ 0'
    },
    slipPercentage: '0.00034954305877530201',
    netOutput: 'ᚱ 609.98441924',
    netOutputDecimals: 8,
    waitTimeSeconds: '19',
    canSwap: true,
    errors: []
  }
}

// Estimate a swap from BUSD to RUNE
// Create asset from string
const BUSD = assetFromString('BNB.BUSD-BD1')
const estimateSwapBUSD = async () => {
    const swapParams: EstimateSwapParams = {
        input: new CryptoAmount(assetToBase(assetAmount(1000)), BUSD),
        destinationAsset: AssetRuneNative,
        destinationAddress: 'xxx',
      }
    const estimate = await thorchainQuery.estimateSwap(swapParams)
    printTx(estimate, swapParams.input)
}
// Output 
{
  memo: '=:THOR.RUNE:xxx:61154162999',
  expiry: 2022-09-22T13:05:26.012Z,
  toAddress: 'bnb13fjncau2d3sw9nrvtpg67mh80gulu25v5msznc',
  txEstimate: {
    input: '$ 1,000',
    totalFees: {
      inboundFee: 'ᚱ 0.0186437',
      swapFee: 'ᚱ 0.0800726',
      outboundFee: 'ᚱ 0.06',
      affiliateFee: 'ᚱ 0'
    },
    slipPercentage: '0.000130905668121087',
    netOutput: 'ᚱ 611.54162023',
    netOutputDecimals: 8,
    waitTimeSeconds: '12',
    canSwap: true,
    errors: []
  }
}

```

### Estimate a Double swap
```ts
// Double swap from BTC to BCH 
const estimateSwapRune = async () => {
    const swapParams: EstimateSwapParams = {
        input: new CryptoAmount(assetToBase(assetAmount(100)), AssetRuneNative),
        destinationAsset: AssetBCH,
        destinationAddress: 'xxx',
      }
    const estimate = await thorchainQuery.estimateSwap(swapParams)
    printTx(estimate, swapParams.input)
}
// Output 
{
  memo: '=:BCH.BCH:xxx:15572427999',
  expiry: 2022-09-22T13:05:28.189Z,
  toAddress: 'bc1q3fjncau2d3sw9nrvtpg67mh80gulu25vq939km',
  txEstimate: {
    input: '₿ 1',
    totalFees: {
      inboundFee: 'ᚱ 1.53203258',
      swapFee: 'ᚱ 336.09753821',
      outboundFee: 'ᚱ 0.61193361',
      affiliateFee: 'ᚱ 0'
    },
    slipPercentage: '0.02938441004579457528',
    netOutput: '155.72427296 BCH',
    netOutputDecimals: 8,
    waitTimeSeconds: '4920',
    canSwap: true,
    errors: []
  }
}
```

