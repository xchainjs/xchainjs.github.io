---
sort: 1
---

# How it works

## Third-party library

It communicates with Polkadot Chain by using [`@polkadot/api`](https://github.com/polkadot-js/api)

### Client URL

Use [`subscan.io`](https://docs.api.subscan.io/) for querying the balances and transactions.
* Mainnet: `https://polkadot.subscan.io`
* Testnet: `https://westend.subscan.io`

Use WS provider for making a transfer.
* Mainnet: [`wss://rpc.polkadot.io`]
* Testnet: [`wss://westend-rpc.polkadot.io`]

### Explorer URL
* Mainnet: [`https://polkadot.subscan.io`](https://polkadot.subscan.io)
* Testnet: [`https://westend.subscan.io`](https://westend.subscan.io)

## Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-cosmos`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-cosmos)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
By default, the index is 0. - `44/354/0/0/0`

## Blockchain-specific functions

### Estimate fees

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
