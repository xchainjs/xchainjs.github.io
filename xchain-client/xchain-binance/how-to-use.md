---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-binance
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-binance`.

```
yarn add @binance-chain/javascript-sdk
```

## Binance Client Testing

```
yarn install
yarn test
```

## Basic Usage Example

### Connect wallet to new Binance Chain Client
Network default is Mainnet
```ts
//Imports 
import { Client } from '@xchainjs/xchain-binance'
import { FeeOption } from "@xchainjs/xchain-client"

// Connect wallet to new btc client 
const connectWallet = async () => {
    let phrase = "phrase"
    const bncClient = new Client({phrase })  
    let address = bncClient.getAddress()
    console.log(`Asset Address is: ${address}`)

    let balances = await bncClient.getBalance(address)
    try {
        let assetAmount = (baseToAsset(balances[0].amount)).amount()
        console.log(`with balance: ${assetAmount}`)
    } catch (error) {
        console.log('no balance')
    }
}
```

### Transfer bnb using BncClient

Create new instance of BncClient\
Set correct amount using xchain-util helper functions\
Build new transaction using TxParams and call transfer.

```ts
const transferBnb = async () => {
    let amountToTransfer = 0.0001
    let recipient = await getRecipientAddress()
    let phrase = "phrase"
    const bncClient = new Client({phrase })
    let amount = assetToBase(assetAmount(amountToTransfer, 8))
    console.log("Building transaction")
    try {
        const txid = await bncClient.transfer({
            "walletIndex":0,
            "asset": AssetBNB,
            "amount": amount,
            "recipient": recipient,
            "memo": "memo"
        })
        console.log(`Amount ${amount.amount().toString()} ${AssetBNB.symbol} TransactionId: ${txid}`)
    } catch (error) {
        console.log(`Transfer failed: ${error}`)
    }
}
```

### Get transaction Data & transaction History
Create new BncClient instance\
Call getTransactionData(hash) returns `[object object]`\
Retrieve relevant data
```ts
    let hash = "insert hash string"
    try {
        const txData = await bncClient.getTransactionData(hash)
        console.log(`From ${JSON.stringify(txData.from[0]["from"])}`)
        console.log(`To ${JSON.stringify(txData.to[0]["to"])}`)

    } catch (error) {
        console.log(`Error: ${error}`)
    }

// Retrieve transaction history for a set address
// txHistoryParams > address, offset, startTime, asset? 
    try {
            const txHistory = await bncClient.getTransactions({address: Address, limit:4 })
            console.log(`Found ${txHistory.total.toString()}`)
            txHistory.txs.forEach(tx => console.log(JSON.stringify(tx.to)))
            
        } catch (error) {
            console.log(`Error: ${error}`)
    }
```
### Get current fees

Bnc is a fixed fee client, average, fast and fastest return the same value.\
getFees() returns current fees for the network\
getMultiSendFees() returns current fees for a multi send tx

```ts
    try {
        const fee = await bncClient.getFees()
        console.log(`Fees average:  ${baseToAsset(fee.average).amount()}`)
        console.log(`Fees fast:  ${baseToAsset(fee.fast).amount()}`)
        console.log(`Fees fastest:  ${baseToAsset(fee.fastest).amount()}`)
        
    } catch (error) {
        console.log(error)
    }

```
### Multisend Transaction
Building a multisend transaction with BncClient\
Build transaction with transactions taking a Array of objects.

```ts
const multisendTransfer = async () => {
    let recipientA = "recipient A address"
    let recipientB = "recipient B address"
    let amountToTransfer = 0.0001
    let amountA = assetToBase(assetAmount(amountToTransfer, 8))
    let amountB = assetToBase(assetAmount(amountToTransfer, 8))
    let phrase = "phrase"
    const bncClient = new Client({phrase})
    console.log("Building transaction ")
    try {
        const txId = await bncClient.multiSend({
            "walletIndex": 0,
            "transactions": [{
                "coins":[{
                    "asset": AssetBNB, 
                    "amount": amountA                 
                }],
                "to":recipientA
            }, {
                "coins": [{
                    "asset":AssetBNB,
                    "amount": amountB
                }],
                "to":recipientB
            }],
            "memo": "memo"
        })
        console.log(`Multisend Txid: ${txId}`)
    } catch (error) {
        console.log(`Multi transfer failed: ${error} `)        
    }
}
```