---
sort: 2
---

# How to use

## Installation
```bash
yarn add @xchainjs/xchain-thorchain-amm
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-thorchain-amm`
Add this to the package.json and then run `yarn`
```ts
 "dependencies": {
    "@binance-chain/javascript-sdk": "^4.2.0",
    "@cosmos-client/core": "^0.45.1",
    "@lerna/bootstrap": "^4.0.0",
    "@psf/bitcoincashjs-lib": "^4.0.2",
    "@terra-money/terra.js": "^3.1.4",
    "@xchainjs/xchain-binance": "^5.5.0",
    "@xchainjs/xchain-bitcoin": "^0.19.0",
    "@xchainjs/xchain-bitcoincash": "^0.14.0",
    "@xchainjs/xchain-client": "^0.12.0",
    "@xchainjs/xchain-cosmos": "^0.19.0",
    "@xchainjs/xchain-crypto": "^0.2.6",
    "@xchainjs/xchain-doge": "^0.3.0",
    "@xchainjs/xchain-ethereum": "^0.26.0",
    "@xchainjs/xchain-litecoin": "^0.9.0",
    "@xchainjs/xchain-midgard": "^0.1.0-alpha2",
    "@xchainjs/xchain-terra": "^0.2.0",
    "@xchainjs/xchain-thorchain": "^0.25.3",
    "@xchainjs/xchain-thorchain-amm": "^0.1.0-alpha2",
    "@xchainjs/xchain-thornode": "^0.1.0-alpha3",
    "@xchainjs/xchain-util": "^0.8.0",
    "axios": "^0.27.2",
    "axios-retry": "^3.3.1",
    "bchaddrjs": "^0.5.2",
    "bech32-buffer": "^0.2.0",
    "bitcoinjs-lib": "^6.0.1",
    "dotenv": "^16.0.0",
    "ethers": "^5.6.2",
  }
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

## Basic Usage Exmples

Swap from BNB -> RUNE

```ts
// Imports
import { AssetRuneNative, } from '@xchainjs/xchain-util'
import fs = require('fs');
import { Network } from '@xchainjs/xchain-client'
import { decryptFromKeystore } from "@xchainjs/xchain-crypto"
import { assetAmount, assetFromString, assetToBase, Chain  } from '@xchainjs/xchain-util'
import { CryptoAmount, EstimateSwapParams, Wallet, Midgard, SwapEstimate, ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
import BigNumber from 'bignumber.js'
require('dotenv').config();

// Swap from BUSD to RUNE
const doSwap = async () => {
  let phrase = await decryptFromKeystore(keystore1, password)
  const mainnetWallet = new Wallet(Network.Mainnet, phrase|| 'you forgot to set the phrase')
  const swapParams = {
    input: new CryptoAmount(assetToBase(assetAmount(1)), BUSD),
    destinationAsset: AssetRuneNative,
    slipLimit: new BigNumber(0.03),
  }
  try {
    const outPutCanSwap = await thorchainAmm.estimateSwap(swapParams)
    print(outPutCanSwap, swapParams.input)
    if (outPutCanSwap.canSwap) {
      const output = await thorchainAmm.doSwap(
        mainnetWallet,
        swapParams,
        mainnetWallet.clients[Chain.THORChain].getAddress(),
      )
      console.log(`Tx hash: ${output.hash},\n Tx url: ${output.url}\n WaitTime: ${output.waitTimeSeconds}`)
      const checkTx = await thorchainAmm.checkTx(output.hash)
      console.log(checkTx)
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

```

```ts
//Outputs
{
  input: '$ 1',
  totalFees: {
    inboundFee: 'ᚱ 0.01174119',
    swapFee: 'ᚱ 0.00000003',
    outboundFee: 'ᚱ 0.06',
    affiliateFee: 'ᚱ 0'
  },
  slipPercentage: '0.00000008471754229581',
  netOutput: 'ᚱ 0.30831966',
  waitTimeSeconds: '0',
  canSwap: true,
  errors: undefined
}
Tx hash: "Hash will be here",
Tx url: "URL will be here" 
```

Estimating a swap from BTC -> BUSD
```ts
import { Network } from '@xchainjs/xchain-client'
import { AssetBTC, assetAmount, assetFromString, assetToBase } from '@xchainjs/xchain-util'
import BigNumber from 'bignumber.js'

import { CryptoAmount, EstimateSwapParams, Midgard, SwapEstimate, ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'

const BUSD = assetFromString('BNB.BUSD-BD1')
if (!BUSD) throw Error('bad asset')

function print(estimate: SwapEstimate, input: CryptoAmount) {
  const expanded = {
    input: input.formatedAssetString(),
    totalFees: {
      inboundFee: estimate.totalFees.inboundFee.formatedAssetString(),
      swapFee: estimate.totalFees.swapFee.formatedAssetString(),
      outboundFee: estimate.totalFees.outboundFee.formatedAssetString(),
      affiliateFee: estimate.totalFees.affiliateFee.formatedAssetString(),
    },
    slipPercentage: estimate.slipPercentage.toFixed(),
    netOutput: estimate.netOutput.formatedAssetString(),
    waitTimeSeconds: estimate.waitTimeSeconds.toFixed(),
    canSwap: estimate.canSwap,
    errors: estimate.errors,
  }
  console.log(expanded)
}
try {
  const midgard = new Midgard(Network.Mainnet) //defaults to mainnet
  const thorchainAmm = new ThorchainAMM(midgard)
  const swapParams: EstimateSwapParams = {
    input: new CryptoAmount(assetToBase(assetAmount('1')), AssetBTC),
    destinationAsset: BUSD,
    // affiliateFeePercent: 0.003, //optional
    slipLimit: new BigNumber('0.03'), //optional
  }
  const estimate = await thorchainAmm.estimateSwap(swapParams)
  print(estimate, swapParams.input)

  // convert fees (by defualt returned in RUNE) to a different asset (BUSD)
  const estimateInBusd = await thorchainAmm.getFeesIn(estimate.totalFees, BUSD)
  estimate.totalFees = estimateInBusd
  print(estimate, swapParams.input)
} catch (e) {
  console.error(e)
}
```

```ts
//Outputs
===Estimate with fees in Rune===
 {
  input: '₿ 1',
  totalFees: {
    inboundFee: 'ᚱ 0.02165694',
    swapFee: 'ᚱ 69.57707207',
    outboundFee: 'ᚱ 0.03235451',
    affiliateFee: 'ᚱ 0'
  },
  slipPercentage: '0.00299630164689824336',
  netOutput: '$ 23,151.33630401',
  waitTimeSeconds: '1116',
  canSwap: true,
  errors: undefined
}
===Estimate with fees in BUSD===
{
  input: '₿ 1',
  totalFees: {
    inboundFee: '$ 0.05822673',
    swapFee: '$ 187.06454402',
    outboundFee: '$ 0.08698816',
    affiliateFee: '$ 0'
  },
  slipPercentage: '0.00299630164689824336',
  netOutput: '$ 23,151.33630401',
  waitTimeSeconds: '1116',
  canSwap: true,
  errors: undefined
}
```
