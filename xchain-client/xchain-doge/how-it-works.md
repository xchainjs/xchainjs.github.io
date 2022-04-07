---
sort: 1
---

# How it works

## Third-party library

It communicates with Doge by using [BIP39](https://github.com/bitcoinjs/bip39) [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) and [WIF](https://github.com/bitcoinjs/wif)

### Client URL
* Mainnet: `https://api.blockcypher.com/v1`
* Testnet: `https://api.blockcypher.com/v1`

### Explorer URL
* Mainnet: [`https://blockchair.com/dogecoin`](https://blockchair.com/dogecoin)
* Testnet: [`https://blockexplorer.one/dogecoin/testnet`](https://blockexplorer.one/dogecoin/testnet)

## Dependencies 

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)

## Address Generation

By default, the index is 0. - `m/44'/3'/0'/0/` for mainnet, `m/44'/3'/0'/0/` for testnet

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