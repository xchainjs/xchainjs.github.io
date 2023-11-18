---
sort: 2
---

# How to use

## Installation

```sh
yarn add @xchainjs/xchain-arbitrum
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-arbitrum`.

```sh
yarn add @xchainjs/xchain-evm @xchainjs/xchain-evm-providers @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util axios ethers
```

##  Client Testing

```sh
yarn install
yarn test
```

## Basic Usage Example 
```ts
// Imports
import { Client, defaultArbParams } from "@xchainjs/xchain-arbitrum"
import { FeeOption } from "@xchainjs/xchain-client"
import { assetToBase, baseToAsset, assetAmount, Asset, Chain  } from "@xchainjs/xchain-util"

```

### Connect wallet to new Arbitrum Chain Client
Network default is Testnet
```ts
// Create arbitrum asset
const TestnetUSDCAsset: Asset = {
  chain: 'ARB',
  symbol: 'USDC-0x179522635726710dd7d2035a81d856de4aa7836c',
  ticker: 'USDC',
  synth: false,
}
// Create new Arbitrum Client Instance
const connectWallet = async () => {
    defaultArbParams.phrase = "phrase"
    const arbitrumClient = new Client(defaultArbParams)
    let address = arbitrumClient.getAddress()
    console.log(`Address: ${address}`)
    let isValid = arbitrumClient.validateAddress(address)
    if( isValid === true ){
        try {
            const balance = await arbitrumClient.getBalance(address)
            let assetAmount = (baseToAsset(balance[1].amount)).amount()
            console.log(`With balance: ${assetAmount}`)
    
        } catch (error) {
            console.log(`Caught: ${error}`)
        }
    }
}
```

### Transfer Arbitrum using arbitrumClient
```ts
const transferArbitrum = async () => {
    let amountToTransfer = 0.1
    let recipient = "address"
    defaultArbParams.phrase = "phrase"
    const arbitrumClient = new Client(defaultArbParams)
    let amount = assetToBase(assetAmount(amountToTransfer, 18))
    console.log("Building transaction", JSON.stringify(amount.amount()))
    try {
        const txid = await arbitrumClient.transfer({ 
            "asset": TestnetUSDCAsset,
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
    defaultArbParams.phrase = "phrase"
    const arbitrumClient = new Client(defaultArbParams)
    let amountToTransfer = 20
    let amount = assetToBase(assetAmount(amountToTransfer, 18))
    let recipient = "recipient"
    try {
        const txParams: TxParams = {
            walletIndex: 0,
            asset: TestnetUSDCAsset,
            amount: amount,
            recipient: recipient,
        }
        const {fast, fastest, average} = await arbitrumClient.getFees(txParams)
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
```

### Get transaction Data & History
```ts
const transactionData = async () => {
    defaultArbParams.phrase = "phrase"
    const arbitrumClient = new Client(defaultArbParams)
    let hash = "0x60721cf788b7cd4e56acf6479e71dfbd12e6c79c15e76595e4e52409bf686d4c"

    try {
        const txData = await arbitrumClient.getTransactionData(hash)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
// Address History
const transactionHistory = async () => {
    defaultArbParams.phrase = "phrase"
    const arbitrumClient = new Client(defaultArbParams)
    let Address = arbitrumClient.getAddress()

    try {
        const txHistory = await arbitrumClient.getTransactions({address: Address, limit: 4 })
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
```