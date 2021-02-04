---
sort: 1
---

# How it works

## Third-party library

It communicates with Bitcoin by using [`bitcoinjs-lib`](https://github.com/bitcoinjs/bitcoinjs-lib)

### Client URL
* Mainnet: `https://sochain.com/api/v2`
* Testnet: `https://sochain.com/api/v2`

### Explorer URL
* Mainnet: [`https://blockstream.info`](https://blockstream.info)
* Testnet: [`https://blockstream.info/testnet`](https://blockstream.info)

## Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

By default, the index is 0. - `84'/2'/0'/0/0` for mainnet, `84'/1'/0'/0/0` for testnet

## Blockchain-specific functions

### Additional functions to get fee information

* `getFeesWithRates`
* `getFeesWithMemo`
* `getFeeRates`

```
type FeeRate = number
type FeeRates = Record<FeeOptionKey, FeeRate>
type FeesWithRates = { rates: FeeRates; fees: Fees }

getFeesWithRates(memo?: string): Promise<FeesWithRates>
getFeesWithMemo(memo: string): Promise<Fees>
getFeeRates(): Promise<FeeRates>
```
