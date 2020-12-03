---
sort: 5
---

# XCHAIN COSMOS

Custom Cosmos client and utilities used by XChainJS clients

## How it works

### Third-party library

It communicates with Cosmos Chain by using [`cosmos-client`](https://github.com/cosmos-client/cosmos-client-ts)

#### Client URL
* Mainnet: `https://api.cosmos.network`
* Testnet: `http://lcd.gaia.bigdipper.live:1317`

#### Explorer URL
* Mainnet: [`https://cosmos.bigdipper.live`](https://cosmos.bigdipper.live)
* Testnet: [`https://gaia.bigdipper.live`](https://gaia.bigdipper.live)

#### Chain ID
* Mainnet: `cosmoshub-3`
* Testnet: `gaia-3a`

### Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

### Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

By default, the index is 0. - `44/118/0/0`

### Blockchain-specific functions

It doesn't have any blockchain-specific functions.

## How to use

### Installation

```
yarn add @xchainjs/xchain-cosmos
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-cosmos`.

```
yarn add cosmos-client
```

### Cosmos Client Testing

```
yarn install
yarn test
```

### Create a client instance.

Set `phrase` and `network` when creating an instance.

```
const client = new Client({ phrase, network })
```

### Available functions

#### Config and Setup

##### `setNetwork(net: Network): void`
Sets the network: `mainnet` or `testnet`.

##### `setPhrase(phrase: string): Address`
Sets the phrase. The phrase will be used to generate the address.

##### `getNetwork(): Network`
Returns the network: `mainnet` or `testnet`

##### `getAddress(): Address`
Returns the Address generated from the `BIP39` phrase.

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

##### `getChainId(): string`
Returns the chain id of the network.

* Mainnet: `cosmoshub-3`
* Testnet: `gaia-3a`

##### `getMainAsset(): Asset`
Returns the main assets of the network.

* Mainnet: `Atom`
* Testnet: `Muon`

##### `validateAddress(address: string): boolean`
Checks if the address is valid.

#### Client URL

##### `getClientUrl(): string`
Returns the client URL.

* Mainnet: `https://api.cosmos.network`
* Testnet: `http://lcd.gaia.bigdipper.live:1317`

#### Explorer URL

##### `getExplorerUrl(): string`
Returns explorer URL.

##### `getExplorerAddressUrl(address: Address): string`
Returns explorer URL for the address.

##### `getExplorerTxUrl(txID: string): string`
Returns explorer URL for the transaction.

#### Querying

##### `getBalance(address?: Address, asset?: Asset): Promise<Balances>`
Returns the balances of the address.

* `address` is optional, if not set, it will use the one generated from the phrase.
* `asset` is optional, if not set, it will return all balances of assets available.

##### `getTransactions(params?: TxHistoryParams): Promise<TxsPage>`
Returns a simplied array of recent transactions for an address. 

`params` is optional, if not set, it will return the latest transactions of the address generated from the phrase.

Following parameters are available:
* `address`: the address which will be used to fetch transctions
* `offset`: optional, used for the pagination
* `limit`: optional, used for the pagination

##### `getTransactionData(txId: string): Promise<Tx>`
Returns a transaction information from the transaction ID/hash. 

#### Get fee info

##### `getDefaultFees(): Promise<Fees>`
Returns default fees for transfer.

##### `getFees(): Promise<Fees>`
Returns fees for transfer.

#### Transfer

##### `transfer(params: TxParams): Promise<TxHash>`
Used to send a normal transfer.

Following parameters are available:
* `asset`: optional, `mainAsset` will be used by default (use `getMainAsset()` to get main asset of current network)
* `amount`: the amount of tokens that will be transfered
* `recipient`: the address that will send tokens to
* `memo`: optional, additional memo for the transaction

#### Purge

##### `purgeClient(): void`
