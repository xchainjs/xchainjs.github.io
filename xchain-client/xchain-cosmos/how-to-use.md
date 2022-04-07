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
yarn add cosmos-client/core
```

## Cosmos Client Testing

```bash
yarn install
yarn test
```

### Create a Cosmos client instance and get balance

Set `phrase` and `network` when creating an instance.

```ts
const connectWallet = async () => {
    let phrase = await decryptFromKeystore(keystore1, password)
    const cosmosClient = new Client({network: Network.Mainnet, phrase})
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
