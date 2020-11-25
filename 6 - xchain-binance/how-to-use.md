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

## Create a client instance.

Set `phrase` and `network` when creating an instance.

```
const client = new Client({ phrase, network })
```

## Available functions

### Config and Setup

* getBncClient(): BncClient
* setNetwork(net: Network): void
* getNetwork(): Network
* setPhrase(phrase: string): Address
* getAddress(): Address
* validateAddress(address: string): boolean

### Explorer URL

* getExplorerUrl(): string
* getExplorerAddressUrl(address: Address): string
* getExplorerTxUrl(txID: string): string

### Querying

* getBalance(address?: Address, asset?: Asset): Promise<Balances>
* getTransactions(params?: TxHistoryParams): Promise<TxsPage>
* getTransactionData(txId: string): Promise<Tx>

### Get fee info

* getFees(): Promise<Fees>
* getMultiSendFees(): Promise<Fees>

### Transfer

* transfer(params: TxParams): Promise<TxHash>
* multiSend(params: MultiSendParams): Promise<TxHash>

### Purge

* purgeClient(): void
