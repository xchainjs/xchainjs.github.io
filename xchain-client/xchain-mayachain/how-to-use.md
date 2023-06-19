---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-mayachain
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-mayachain`.
It is important to use version @0.46.1 of Cosmos-client like so `@cosmos-client/core@0.46.1` otherwise things might break. 

```bash
yarn add @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util @xchainjs/xchain-cosmos axios @cosmos-client/core@0.46.1 bech32-buffer
```

## Mayachain Client Testing

```bash
yarn install
yarn test
```

## Basic usage examples

### Connect wallet to new Maya Client

Create new mayachain client\
Client has two different sets of parameters `XchainClientParams & MayachainClientParams`\
MayachainClient includes chainIds. getChainIds() return alls chain id's for default Client Url.\
Network default is Mainnet

```ts

// Imports 
import { Client, getChainIds, getDefaultClientUrl} from '@xchainjs/xchain-mayachain'
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"


// Create new instance of the client and query chain for balances. 
const connectWallet = async () => {

    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    let address = mayaClient.getAddress()
    console.log(`Address: ${address}`)
    try {
        const balance = await mayaClient.getBalance(address)
        let assetAmount = (baseToAsset(balance[0].amount)).amount()
        console.log(`With balance: ${assetAmount}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```

### Transfer CACAO using Maya Client

Create new Mayachain client instance\
Convert amount to transfer to base amount\
Build transaction. 

```ts

//Imports
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"
 
const transferCacao = async () => {

    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    let amountToTransfer = 0.1
    let amount = assetToBase(assetAmount(amountToTransfer, DECIMAL ))
    let recipient = "maya1ka2v9exy8ata00pch87wgzf9dsmyag94tq8mug" 
    try {
        const txid = await mayaClient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "test",
            "asset": AssetCacao,
            "walletIndex": 0 
        })
        console.log(`Transaction sent: ${JSON.stringify(txid)}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}


```

### Get transaction Data & transaction History

Retrieve transaction data using transaction hash and address

```ts

const transactionData = async () => {
 
    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    let hash = "insert hash"
    let address = mayaClient.getAddress()
    try {
        const txData = await mayaClient.getTransactionData(hash, address)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
// By default getTransactions() returns the transactions for the current address
const transactionHistory = async () => {

    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    
    try {
        const txHistory = await mayaClient.getTransactions() 
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
```

### Get transfer Fees

MayaChain runs on fee type of Flatfee set to `0.2` Cacao

```ts
// Returns Fees Fast: 0.2 Fastest: 0.2 Average: 0.2
const fee = async () => {

    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    try {
        const {fast, fastest, average} = await mayaClient.getFees()
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
```

### Get Network and Explorer Data

```ts
// Query mayachain client for network data and explorer data

const explorerUrl = async () => {

    let phrase = "phrase"
    const mayaClient = new Client({phrase})
    let hash = "insert hash"
    try {
        const networkData = mayaClient.getExplorerUrl()
        console.log(`Explorer url: ${networkData}`)
        const transactionUrl = mayaClient.getExplorerTxUrl(hash)
        console.log(`Explorer transaction: ${transactionUrl}`)

    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```
