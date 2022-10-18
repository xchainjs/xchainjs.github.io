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
  "devDependencies": {
    "@binance-chain/javascript-sdk": "^4.2.0",
    "@cosmos-client/core": "0.45.13",
    "@psf/bitcoincashjs-lib": "^4.0.2",
    "@terra-money/terra.js": "^3.0.2",
    "@xchainjs/xchain-binance": "^5.6.0",
    "@xchainjs/xchain-bitcoin": "^0.20.0",
    "@xchainjs/xchain-bitcoincash": "^0.15.0",
    "@xchainjs/xchain-client": "^0.13.0",
    "@xchainjs/xchain-cosmos": "^0.20.0",
    "@xchainjs/xchain-crypto": "^0.2.6",
    "@xchainjs/xchain-doge": "^0.5.0",
    "@xchainjs/xchain-ethereum": "^0.27.0",
    "@xchainjs/xchain-evm": "^0.1.0-alpha2",
    "@xchainjs/xchain-avax": "^0.1.0-alpha2",
    "@xchainjs/xchain-litecoin": "^0.10.0",
    "@xchainjs/xchain-midgard": "0.1.0-alpha2",
    "@xchainjs/xchain-terra": "^0.3.0",
    "@xchainjs/xchain-thorchain": "^0.26.0",
    "@xchainjs/xchain-thorchain-query": "^0.1.0-beta",
    "@xchainjs/xchain-util": "^0.9.0",
    "axios": "^0.25.0",
    "axios-retry": "^3.2.5",
    "bchaddrjs": "^0.5.2",
    "bech32": "^2.0.0",
    "bech32-buffer": "^0.2.0",
    "bignumber.js": "^9.0.0",
    "bitcoinjs-lib": "^5.2.0",
    "dotenv": "^16.0.0",
    "coininfo": "^5.1.0",
    "coinselect": "^3.1.12",
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

## Basic Usage Exmples

Swap from BNB -> RUNE

```ts
// Imports
import { AssetRuneNative, } from '@xchainjs/xchain-util'
import { assetAmount, assetFromString, assetToBase, Chain  } from '@xchainjs/xchain-util'
import { CryptoAmount, EstimateSwapParams, Wallet, Midgard, SwapEstimate, ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
import BigNumber from 'bignumber.js'

// Swap from BUSD to RUNE
const doSwap = async () => {
  let phrase = "phrase"
  const mainnetWallet = new Wallet(Network.Mainnet, phrase|| 'you forgot to set the phrase')
  const swapParams = {
    input: new CryptoAmount(assetToBase(assetAmount(1)), BUSD),
    destinationAsset: AssetRuneNative,
    destinationAddress: mainnetWallet.clients[Chain.THORChain].getAddress(),
    slipLimit: new BigNumber(0.03),
  }
  try {
    const outPutCanSwap = await thorchainQueryMainnet.estimateSwap(estimateSwapParams)
    print(outPutCanSwap)
    if (outPutCanSwap.txEstimate.canSwap) {
      const output = await mainetThorchainAmm.doSwap(mainnetWallet, estimateSwapParams)
      console.log(`Tx hash: ${output.hash},\n Tx url: ${output.url}\n WaitTime: ${output.waitTimeSeconds}`)
      expect(output).toBeTruthy()
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

```

```ts
//Outputs
{
  memo: '=:THOR.RUNE:xxx:53281999',
  expiry: 2022-09-22T13:14:10.941Z,
  toAddress: 'bnb13fjncau2d3sw9nrvtpg67mh80gulu25v5msznc',
  txEstimate: {
    input: '$ 1',
    totalFees: {
      inboundFee: 'ᚱ 0.01863509',
      swapFee: 'ᚱ 0.00000008',
      outboundFee: 'ᚱ 0.06',
      affiliateFee: 'ᚱ 0'
    },
    slipPercentage: '0.00000012685928643813',
    netOutput: 'ᚱ 0.53281571',
    netOutputDecimals: 8,
    waitTimeSeconds: '12',
    canSwap: true,
    errors: []
  }
}
Tx hash: "Hash will be here",
Tx url: "URL will be here" 
```


