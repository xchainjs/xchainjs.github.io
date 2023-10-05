---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-bsc
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-bsc`.

```
yarn add @xchainjs/xchain-evm @xchainjs/xchain-evm-providers @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util axios ethers
```

##  Client Testing

```
yarn install
yarn test
```

## Basic Usage Example 
###Imports
```ts
import { Client, defaultBscParams, AssetBSC } from "@xchainjs/xchain-bsc"
import { FeeOption } from "@xchainjs/xchain-client"
import { assetToBase, baseToAsset, assetAmount, Asset, Chain  } from "@xchainjs/xchain-util"
```

### Connect wallet to new Bsc Chain Client
Network default is Mainnet
```ts
// Create new Bsc Asset 
const assetRIP: Asset = {
    chain: AssetBSC.chain,
    symbol: `RIP-0x224695ba2a98e4a096a519b503336e06d9116e48`,
    ticker: `RIP`,
    synth: false,
  }
// Create new Bsc Client Instance
const connectWallet =async () => {
    defaultBscParams.phrase = "phrase"
    const bscClient = new Client(defaultBscParams)
    let address = bscClient.getAddress()
    console.log(`Address: ${address}`)
    let isValid = bscClient.validateAddress(address)
    if( isValid === true ){
        try {
            const balance = await bscClient.getBalance(address)
            let assetAmount = (baseToAsset(balance[1].amount)).amount()
            console.log(`With balance: ${assetAmount}`)
    
        } catch (error) {
            console.log(`Caught: ${error}`)
        }
    }
}
```