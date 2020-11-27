---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-bitcoin
```

## Bitcoin Client Testing

```
yarn install
yarn test
```

## Usage

## Create a client instance.

Set `phrase`, `network`, `nodeUrl`, `nodeApiKey` when creating an instance.

```
const client = new Client({ phrase, network, nodeUrl, nodeApiKey })
```

Or use following to set them.

```
client.setNetwork(network)

client.setPhrase(phrase')

client.setNodeURL(nodeUrl)

client.setNodeAPIKey(nodeApiKey)
```

## Available functions

### Config and Setup

#### `setNetwork(net: Network): void`
Sets the network: `mainnet` or `testnet`.

#### `setPhrase(phrase: string): Address`
Sets the phrase. The phrase will be used to generate the address.

#### `setNodeURL(url: string): void`
Sets the node URL which will be used to interact with the node.

e.g. `https://api.blockchair.com/bitcoin` for mainnet and `https://api.blockchair.com/bitcoin/testnet` for testnet

#### `setNodeAPIKey(key: string): void`
Sets the node API key.

#### `getNetwork(): Network`
Returns the network: `mainnet` or `testnet`

#### `getAddress(): Address`
Returns the Address generated from the `BIP39` phrase.

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

#### `validateAddress(address: string): boolean`
Checks if the address is valid.

#### `isTestnet(): boolean`
Checks if current network is testnet.

#### `derivePath(): string`
Returns the derive path.

* Mainnet: `84'/0'/0'/0/0`
* Testnet: `84'/1'/0'/0/0`

### Explorer URL

#### `getExplorerUrl(): string`
Returns explorer URL.

#### `getExplorerAddressUrl(address: Address): string`
Returns explorer URL for the address.

#### `getExplorerTxUrl(txID: string): string`
Returns explorer URL for the transaction.

### Scan UTXOs

#### `scanUTXOs(): Promise<void>`
Scans the UTXOs on the set seed phrase in `.setPhrase()` and stores them in class properties.

### Querying

#### `getBalance(address?: Address): Promise<Balances>`
Returns the balances of the address.

* `address` is optional, if not set, it will use the one generated from the phrase.

#### `getTransactions(params?: TxHistoryParams): Promise<TxsPage>`
Returns a simplied array of recent transactions for an address. 

`params` is optional, if not set, it will return the latest transactions of the address generated from the phrase.

Following parameters are available:
* `address`: the address which will be used to fetch transctions
* `offset`: optional, used for the pagination
* `limit`: optional, used for the pagination

#### `getTransactionData(txId: string): Promise<Tx>`
Returns a transaction information from the transaction ID/hash. 

### Get fee info

#### `getFeesWithRates(memo?: string): Promise<FeesWithRates>`
Returns rates and fees.

#### `getFees(): Promise<Fees>`
Returns fees for transactions.

If you want to get `Fees` and `FeeRates` at once, use `getFeesAndRates` method

#### `getFeesWithMemo(memo: string): Promise<Fees>`
Returns fees for transactions with a memo.

If you want to get `Fees` and `FeeRates` at once, use `getFeesAndRates` method

#### `getFeeRates(): Promise<FeeRates>`
Returns fee rates for transactions.

If you want to get `Fees` and `FeeRates` at once, use `getFeesAndRates` method

### Transfer

#### `transfer(params: TxParams & { feeRate: FeeRate }): Promise<TxHash>`
Used to sign and broadcast transactions.

Following parameters are available:
* `asset`: optional, `AssetBTC` will be used by default
* `amount`: the amount of tokens to be sent
* `recipient`: the address that will send tokens to
* `memo`: optional, additional memo for the transaction
* `feeRate`: the fee rate for the transaction

### Purge

#### `purgeClient(): void`
