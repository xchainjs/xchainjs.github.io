---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-litecoin
```
Peer dependencies

```
yarn add @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util axios bitcoinjs-lib coininfo wif
```

## Litecoin Client Testing

```
yarn install
yarn test
```

## Basic usage examples

### Connect wallet to new Litecoin Client
Create new instance of Litecoin Client\
Retrieve and validate address\
Check balance of asset on address

```ts

//Imports 
import { Client } from "@xchainjs/xchain-litecoin"
import { Network } from "@xchainjs/xchain-client"

// Connect wallet and retrieve address and balance of assets on address
const connectWallet =async () => {
    let phrase = "phrase"
    const ltcClient = new Client({network: Network.Mainnet, phrase})
    let address = ltcClient.getAddress()
    console.log(address)
    let isValid = ltcClient.validateAddress(address)
    if( isValid === true ){
        try {
            const balance = await ltcClient.getBalance(address)
            let assetAmount = (baseToAsset(balance[0].amount)).amount()
            console.log(`With balance: ${assetAmount}`)
    
        } catch (error) {
            console.log(`Caught: ${error}`)
        }
    }
}

```

### Transfer litecoin using Litecoin Client instance

Default fee rate is 1 

```ts
//Imports
import { Client, LTC_DECIMAL } from "@xchainjs/xchain-litecoin"
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"

// Create new ltc Client and call transfer function
// Check what txParams are needed
const transferlitecoin = async () => {
    let amountToTransfer = 0.01
    let recipient = "insert recipient"
    let phrase = "phrase"
    const ltcClient = new Client({network: Network.Mainnet, phrase})
    let amount = assetToBase(assetAmount(amountToTransfer, LTC_DECIMAL))
    console.log("Building transaction")
    try {
        const txid = await ltcClient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "memo"         
        })
        console.log(`Transaction sent: ${txid}`)
        const transactionUrl = await ltcClient.getExplorerTxUrl(txid) // returns url for tx
        console.log(`Transaction url: ${transactionUrl}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}

```

### Get transfer fees and FeeRate estimations

getFees() returns Object with type <Fees> `Fees Fast: 0.00015678 Fastest: 0.0007839 Average: 0.00007839` .\
getFeeRates() > returns object `{ average: 100.5, fast: 201, fastest: 1005 }`

```ts
// Call getFee() and or getFeeRates() for fee estimations
const returnFees = async () => {
    let phrase = "phrase"
    const ltcClient = new Client({network: Network.Mainnet, phrase})
    try {
        const {fast, fastest, average} = await ltcClient.getFees()
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)
        const feeRates = await ltcClient.getFeeRates()
        console.log(feeRates)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}

// FeeRates can be added to transfer txParams 
    try {
        const txid = await ltcClient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "memo test",
            feeRate: feeRates.fastest
        })
        console.log(`Transaction sent: ${txid}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
```
### Get transaction data & history

Create new ltc client instance and call functions to return transactionData
or transaction history 

```ts

// Return transanction data from a txid/hash
const transactionData = async () => {
    let phrase = "phrase"
    const ltcClient = new Client({network: Network.Mainnet, phrase})
    let hash = "insert hash"
    try {
        const txData = await ltcClient.getTransactionData(hash)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
// Return transaction history
// txHistoryParams > address, offset?, startTime?, asset?, limit?
const transactionHistory = async () => {
    let phrase = "phrase"
    const ltcClient = new Client({network: Network.Mainnet, phrase})
    let Address = ltcClient.getAddress()
    try {
        const txHistory = await ltcClient.getTransactions({address: Address, limit: 4})
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}

```