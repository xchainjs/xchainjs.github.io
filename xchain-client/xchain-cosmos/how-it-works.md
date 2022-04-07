---
sort: 1
---

# How it works

## Third-party library

It communicates with Cosmos Chain by using [`cosmos-client`](https://github.com/cosmos-client/cosmos-client-ts)

### Client URL
* Mainnet: `https://api.cosmos.network`
* Testnet: `http://lcd.gaia.bigdipper.live:1317`

### Explorer URL
* Mainnet: [`https://cosmos.bigdipper.live`](https://cosmos.bigdipper.live)
* Testnet: [`https://gaia.bigdipper.live`](https://gaia.bigdipper.live)

### Chain ID
* Mainnet: `cosmoshub-3`
* Testnet: `gaia-3a`

## Dependencies

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html))

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

By default, the index is 0. - `44/118/0/0`

## Blockchain-specific functions

It doesn't have any blockchain-specific functions.
