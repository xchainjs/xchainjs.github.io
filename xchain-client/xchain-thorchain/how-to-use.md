---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-thorchain
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-thorchain`.

```bash
yarn add @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util @xchainjs/xchain-cosmos axios @cosmos-client/core bech32-buffer
```

## Thorchain Client Testing

```bash
yarn install
yarn test
```

## Basic usage examples

### Connect wallet to new Thor Client

Create new thorchain client\
Client has two different sets of parameters `XchainClientParams & ThorchainClientParams`\
ThorchainClient includes chainIds. getChainIds() return alls chain id's for default Client Url. 

```ts

// Imports 
import fs = require('fs')
import { Client, getChainIds, getDefaultClientUrl} from '@xchainjs/xchain-thorchain'
import { decryptFromKeystore } from "@xchainjs/xchain-crypto"
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"
import { Network } from '@xchainjs/xchain-client'

// Create new instance of the client and query chain for balances. 
const connectWallet = async () => {
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    let address = thorClient.getAddress()
    console.log(`Address: ${address}`)
    try {
        const balance = await thorClient.getBalance(address)
        let assetAmount = (baseToAsset(balance[0].amount)).amount()
        console.log(`With balance: ${assetAmount}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```

### Transfer rune using Thor Client

Create new Thorchain client instance\
Convert amount to transfer to base amount\
Build transaction. 

```ts

//Imports
import { assetToBase, baseToAsset, assetAmount } from "@xchainjs/xchain-util"
 
const transferRune = async () => {
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    let amountToTransfer = 0.1
    let amount = assetToBase(assetAmount(amountToTransfer, DECIMAL ))
    let recipient = "thor1cf4dsll8rema8y3xvvsn2t786xrkhp3d679qxh" 
    try {
        const txid = await thorClient.transfer({
            "amount": amount,
            "recipient": recipient,
            "memo": "test",
            "asset": AssetRuneNative,
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
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    let hash = "insert hash"
    let address = thorClient.getAddress()
    try {
        const txData = await thorClient.getTransactionData(hash, address)
        console.log(`From ${JSON.stringify(txData)}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
// By default getTransactions() returns the transactions for the current address
const transactionHistory = async () => {
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    
    try {
        const txHistory = await thorClient.getTransactions() 
        console.log(`Found ${txHistory.total.toString()}`)
        txHistory.txs.forEach(tx => console.log(tx.hash))
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
```

### Get transfer Fees

Thorchain runs on fee type of Flatfee set to `0.02` rune

```ts
// Returns Fees Fast: 0.02 Fastest: 0.02 Average: 0.02
const fee = async () => {
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    try {
        const {fast, fastest, average} = await thorClient.getFees()
        console.log(`Fees Fast: ${baseToAsset(fast).amount()} Fastest: ${baseToAsset(fastest).amount()} Average: ${baseToAsset(average).amount()}`)
    } catch (error) {
        console.log(`Caught ${error}`)
    }
}
```

### Get Network and Explorer Data

```ts
// Query thorchain client for network data and explorer data

const explorerUrl = async () => {
    const chainIds = await getChainIds(getDefaultClientUrl())
    let phrase = await decryptFromKeystore(keystore1, password)
    const thorClient = new Client({network: Network.Mainnet, phrase: phrase, chainIds})
    let hash = "insert hash"
    try {
        const networkData = thorClient.getExplorerUrl()
        console.log(`Explorer url: ${networkData}`)
        const transactionUrl = thorClient.getExplorerTxUrl(hash)
        console.log(`Explorer transaction: ${transactionUrl}`)

    } catch (error) {
        console.log(`Caught ${error}`)
    }
}

```