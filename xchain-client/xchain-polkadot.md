---
sort: 7
---

# XCHAIN POLKADOT

Custom Polkadot client and utilities used by XChainJS clients

## How it works

### Third-party library

It communicates with Polkadot Chain by using [`@polkadot/api`](https://github.com/polkadot-js/api)

#### Client URL

Use [`subscan.io`](https://docs.api.subscan.io/) for querying the balances and transactions.
* Mainnet: `https://polkadot.subscan.io`
* Testnet: `https://westend.subscan.io`

Use WS provider for making a transfer.
* Mainnet: [`wss://rpc.polkadot.io`]
* Testnet: [`wss://westend-rpc.polkadot.io`]

#### Explorer URL
* Mainnet: [`https://polkadot.subscan.io`](https://polkadot.subscan.io)
* Testnet: [`https://westend.subscan.io`](https://westend.subscan.io)

### Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-cosmos`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-cosmos)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

### Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
By default, the index is 0. - `44/354/0/0/0`

### Blockchain-specific functions

#### Estimate fees

Estimate fees before transfer.
```
type TxParams = {
  asset?: Asset // BTC.BTC
  amount: BaseAmount // in base format (10**8)
  recipient: Address // address
  memo?: string // optional memo to pass
}
estimateFees(params: TxParams): Promise<Fees>
```

## How to use

### Installation

```
yarn add @xchainjs/xchain-polkadot
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-polkadot`.

```
yarn add @polkadot/api
```

### Polkadot Client Testing

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

##### `setNetwork(net: Network): void
Sets the network: `mainnet` or `testnet`.

* Mainnet: `Polkadot`
* Testnet: `Westend`

##### `setPhrase(phrase: string): Address
Sets the phrase. The phrase will be used to generate the address.

##### `getNetwork(): Network`
Returns the network: `mainnet` or `testnet`

##### `getAddress(): Address`
Returns the Address generated from the `BIP39` phrase.

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

##### `getSS58Format(): number`
Returns the [`ss58 format`](https://polkadot.js.org/docs/keyring/start/ss58/) of current network.

* Mainnet: 0 (`Polkadot`)
* Testnet: 42 (`Westend`)

##### `validateAddress(address: string): boolean`
Checks if the address is valid.

#### Client URL

##### `getClientUrl(): string`
Returns the client URL.

* Mainnet: `https://polkadot.subscan.io`
* Testnet: `https://westend.subscan.io`

##### `getWsEndpoint(): string`
Returns the WS URL used for [`@polkadot/api`](https://github.com/polkadot-js/api).

* Mainnet: `wss://rpc.polkadot.io`
* Testnet: `wss://westend-rpc.polkadot.io`

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
Returns default fees for a transfer.

##### `getFees(): Promise<Fees>`
Returns fees for a transfer.

##### `estimateFees(params: TxParams): Promise<Fees>`
Returns estimated fees before sending transaction.

Following parameters are available:
* `asset`: optional, `AssetRune` will be used by default
* `amount`: the amount of tokens that will be transfered
* `recipient`: the address that will send tokens to
* `memo`: optional, additional memo for the transaction

#### Transfer

##### `transfer(params: TxParams): Promise<TxHash>`
Used to send a normal transfer.

Following parameters are available:
* `asset`: optional, `AssetRune` will be used by default
* `amount`: the amount of tokens that will be transfered
* `recipient`: the address that will send tokens to
* `memo`: optional, additional memo for the transaction

#### Purge

##### `purgeClient(): void`
