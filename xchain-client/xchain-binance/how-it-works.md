---
sort: 1
---

# How it works

## Third-party library

It communicates with Binance Chain by using [`binance-chain/javascript-sdk`](https://github.com/binance-chain/javascript-sdk)

### Client URL
* Mainnet: `https://dex.binance.org`
* Testnet: `https://testnet-dex.binance.org`

### Explorer URL
* Mainnet: [`https://explorer.binance.org`](https://explorer.binance.org)
* Testnet: [`https://testnet-explorer.binance.org`](https://testnet-explorer.binance.org)

## Dependencies

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

By default, the index is 0. - `44/714/0/0`

## Blockchain-specific functions

### Transfer multi transactions.

```
type MultiTransfer = {
  to: Address
  coins: Coin[]
}

type MultiSendParams = {
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
