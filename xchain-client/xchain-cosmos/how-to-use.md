---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-cosmos
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-cosmos`.

```bash
yarn add @cosmos-client/core@0.45.1
```

## Extras
Important note: Make sure to install same version of cosmos-client/core as xchain-cosmos is using (currently "@cosmos-client/core": "^0.45.1", ). In other case things might break.

## Cosmos Client Testing

```bash
yarn install
yarn test
```

## Basic usage examples

### Connect wallet to new Cosmos Client

Create new thorchain client\
Set `phrase` and `network` when creating an instance.\
Network default is Mainnet
```ts

//Imports
import { AssetAtom, Client, COSMOS_DECIMAL } from "@xchainjs/xchain-cosmos"
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"

// Create new instance of the client and query chain for balances.
const connectWallet = async () => {
    let phrase = "phrase"
    const cosmosClient = new Client({phrase})
    let address = cosmosClient.getAddress()
    let isValid = cosmosClient.validateAddress(address)
    console.log(address)
    if(isValid === true){
        try {
            const balance = await cosmosClient.getBalance(address)
            let assetAmount = (baseToAsset(balance[0].amount)).amount()
            console.log(`Adress: ${address} with balance ${assetAmount}`)
            
        } catch (error) {
            console.log(`Caught: ${error} `)
        }
    } else {
        console.log(`Address: ${address} is invalid`)
    }
}

```

### Transfer ATOM using Cosmos Client

Create new Cosmos client instance\
Convert amount to transfer to base amount\
Build transaction. 

```ts
const transfer = async () => {
    let phrase = "phrase"
    const cosmosclient = new Client({ phrase})
    let amountToTransfer = 0.1
    let amount = assetToBase(assetAmount(amountToTransfer, COSMOS_DECIMAL))
    let recipient = "cosmos1f2hzu2cup9tk427w5tpfysvx9cf4c9wkud0qn9" 
    try {
        const txid = await cosmosclient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "test",
            "asset": AssetAtom,
            "walletIndex": 0 
        })
        console.log(`Transaction sent: ${JSON.stringify(txid)}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

// Transfer with fee rate set 
    let feeRate = await cosmosClient.getFeeRates()
    try {
        const txid = await cosmosClient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "test",
            "asset": AssetAtom,
            feeRate: feeRate.fastest
        })
        console.log(`Transaction sent: ${txid}`)

    } catch (error) {
         console.log(`Caught: ${error}`)
    }

```

### Get transaction Data & transaction History

Retrieve transaction data using transaction hash and address

```ts

const transactionData = async () => {
    let txHash = 'insert txHash'
    let phrase = "phrase"
    const cosmosClient = new Client({ phrase})
    try {
        const txData = await cosmosClient.getTransactionData(txHash)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

// By default getTransactions() returns the transactions for the current address

const transactionHistory = async () => {
    let phrase = "phrase"
    const cosmosClient = new Client({phrase})
    const address = cosmosClient.getAddress()
    const url = cosmosClient.getExplorerUrl()
    console.log(url)
    try {
        const txHistory = await cosmosClient.getTransactions()
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))   
    } catch (error) {
        console.log(`Caught: ${error}`)
    }
}
```
### Get transfer Fees

```ts
const feeData = async () => {
    let phrase = "phrase"
    const cosmosClient = new Client({ phrase})
    try {
        const {fast, fastest, average} = await cosmosClient.getFees()
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```

### Get Network and Explorer Data

```ts
// Query Cosmos client for network data and explorer data

const explorerUrl = async () => {
    let phrase = "phrase"
    const cosmosClient = new Client({ phrase})
    let hash = "insert hash"
    try {
        const networkData = cosmosClient.getExplorerUrl()
        console.log(`Explorer url: ${networkData}`)
        const transactionUrl = cosmosClient.getExplorerTxUrl(hash)
        console.log(`Explorer transaction: ${transactionUrl}`)

    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```

