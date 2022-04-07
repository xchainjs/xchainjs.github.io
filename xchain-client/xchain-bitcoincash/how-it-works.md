---
sort: 1
---

# How it works

## Third-party library

It communicates with Bitcoincash by using [@psf/bitcoincashjs-lib](https://www.npmjs.com/package/@psf/bitcoincashjs-lib)

### Client URL
* Mainnet: `https://www.blockchain.com/bch`
* Testnet: `https://www.blockchain.com/bch-testnet`

### Explorer URL
* Mainnet: [`https://www.blockchain.com/explorer?view=bch`](https://www.blockchain.com)
* Testnet: [`https://www.blockchain.com/explorer?view=bch-testnet`](https://www.blockchain.com)

## Dependencies 

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)

## Address Generation

By default, the index is 0. - `m/44'/145'/0'/0/` for mainnet, `m/44'/1'/0'/0/` for testnet

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

### Scans UTXOs on the address

```
scanUTXOs(): Promise<void>
```