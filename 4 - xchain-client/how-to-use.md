---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-client
```

## Implement XChainClient

Implement the XChainClient common interface.
```
interface XChainClient {
  setNetwork(net: Network): void
  getNetwork(): Network

  getExplorerUrl(): string
  getExplorerAddressUrl(address: Address): string
  getExplorerTxUrl(txID: string): string

  getAddress(): Address

  setPhrase(phrase: string): Address

  getBalance(address?: Address, asset?: Asset): Promise<Balances>

  getTransactions(params?: TxHistoryParams): Promise<TxsPage>

  getTransactionData(txId: string): Promise<Tx>

  getFees(): Promise<Fees>

  transfer(params: TxParams): Promise<TxHash>

  purgeClient(): void
}
```

## Add blockchain-specific functions

Add blockchain-specific queries/transactions, such as Binance Chain multi-send.

```
class XXXClient implements XChainClient {

  ... implement XChainClient ...

  ... add blockchain-specific functions ...
  
}
```