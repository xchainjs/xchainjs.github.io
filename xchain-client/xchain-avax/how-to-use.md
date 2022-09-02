---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-avax
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-avax`.

```
yarn add @xchainjs/xchain-evm @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util axios ethers
```

##  Client Testing

```
yarn install
yarn test
```

## Basic Usage Example 
###Imports
```ts
import { Client, defaultAvaxParams } from "@xchainjs/xchain-avax"
import { FeeOption, Network } from "@xchainjs/xchain-client"
import { assetToBase, baseToAsset, assetAmount, Asset, Chain  } from "@xchainjs/xchain-util"

```

### Connect wallet to new Avax Chain Client

```ts
// Create new Avax Asset 
const assetRIP: Asset = {
    chain: Chain.Avalanche,
    symbol: `RIP-0x224695ba2a98e4a096a519b503336e06d9116e48`,
    ticker: `RIP`,
    synth: false,
  }
// Create new Avax Client Instance
const connectWallet =async () => {
    defaultAvaxParams.network = Network.Mainnet
    defaultAvaxParams.phrase = "phrase"
    const avaxClient = new Client(defaultAvaxParams)
    let address = avaxClient.getAddress()
    console.log(`Address: ${address}`)
    let isValid = avaxClient.validateAddress(address)
    if( isValid === true ){
        try {
            const balance = await avaxClient.getBalance(address)
            let assetAmount = (baseToAsset(balance[1].amount)).amount()
            console.log(`With balance: ${assetAmount}`)
    
        } catch (error) {
            console.log(`Caught: ${error}`)
        }
    }
}
```

### Transfer Avax using AvaxClient
```ts
const transferAvax = async () => {
    let amountToTransfer = 0.1
    let recipient = "address"
    defaultAvaxParams.network = Network.Mainnet
    defaultAvaxParams.phrase = "phrase"
    const avaxClient = new Client(defaultAvaxParams)
    let amount = assetToBase(assetAmount(amountToTransfer, 18))
    console.log("Building transaction", JSON.stringify(amount.amount()))
    try {
        const txid = await avaxClient.transfer({ 
            "asset": assetRIP,
            "amount": amount,
            "recipient":recipient,
            feeOption: FeeOption.Fast,
        })
        console.log(`Transaction sent: ${txid}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    } 
}
```

## Get fees 
```ts
const returnFees = async () => {
    defaultAvaxParams.network = Network.Mainnet
    defaultAvaxParams.phrase = "phrase"
    const avaxClient = new Client(defaultAvaxParams)
    let amountToTransfer = 20
    let amount = assetToBase(assetAmount(amountToTransfer, 18))
    let recipient = "recipient"
    try {
        const txParams: TxParams = {
            walletIndex: 0,
            asset: assetRIP,
            amount: amount,
            recipient: recipient,
        }
        const {fast, fastest, average} = await avaxClient.getFees(txParams)
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
```

### Get transaction Data & History
```ts
const transactionData = async () => {
    defaultAvaxParams.network = Network.Mainnet
    defaultAvaxParams.phrase = "phrase"
    const avaxClient = new Client(defaultAvaxParams)
    let hash = "0x60721cf788b7cd4e56acf6479e71dfbd12e6c79c15e76595e4e52409bf686d4c"

    try {
        const txData = await avaxClient.getTransactionData(hash)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
// Address History
const transactionHistory = async () => {
    defaultAvaxParams.network = Network.Mainnet
    defaultAvaxParams.phrase = "phrase"
    const avaxClient = new Client(defaultAvaxParams)
    let Address = avaxClient.getAddress()

    try {
        const txHistory = await avaxClient.getTransactions({address: Address, limit: 4 })
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
```