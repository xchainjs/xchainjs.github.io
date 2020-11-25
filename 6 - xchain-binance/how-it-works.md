---
sort: 1
---

# How it works

## Third-party library

It communicates with Binance Chain by using [`binance-chain/javascript-sdk`](https://github.com/binance-chain/javascript-sdk)

### Client URL
* Mainnet: [`https://dex.binance.org`]
* Testnet: [`https://testnet-dex.binance.org`]

### Explorer URL
* Mainnet: [`https://explorer.binance.org`](https://explorer.binance.org)
* Testnet: [`https://testnet-explorer.binance.org`](https://testnet-explorer.binance.org)

## Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
By default, the index is 0. - `44/714/0/0`

## Blockchain-specific functions

### Transfer multi tranactions.

```
export type MultiTransfer = {
  to: Address
  coins: Coin[]
}

export type MultiSendParams = {
  address?: Address
  transactions: MultiTransfer[]
  memo?: string
}

multiSend(params: MultiSendParams): Promise<TxHash>
```

### Get multi-transfer fees.

```
getMultiSendFees(): Promise<Fees>
```
