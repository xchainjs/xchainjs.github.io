---
sort: 2
---

# Interface

## Installation

```bash
yarn add @xchainjs/xchain-client
```

## Implement XChainClient

Implement the `XChainClient` common interface as described [here](https://github.com/xchainjs/xchainjs-lib/blob/master/packages/xchain-client/README.md) (code [here](https://github.com/xchainjs/xchainjs-lib/blob/master/packages/xchain-client/src/types.ts#L75-L99))
```ts
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
  getDefaultFees(): Fees

  transfer(params: TxParams): Promise<TxHash>

  purgeClient(): void
}
```

## Add blockchain-specific functions

Add blockchain-specific queries/transactions, such as Binance Chain multi-send.

```ts
class Client implements XChainClient {

  ... implement XChainClient ...

  ... add blockchain-specific functions ...
  
}
```
