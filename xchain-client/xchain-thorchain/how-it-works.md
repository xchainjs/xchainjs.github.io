---
sort: 1
---

# How it works

## Third-party library

It communicates with Thorchain by using [`cosmos-client`](https://github.com/cosmos-client/cosmos-client-ts)

### Client URL
* Mainnet: `http://138.68.125.107:1317`
* Testnet: `http://134.209.138.247:1317`

Available mainnet seeds [`here`](https://chaosnet-seed.thorchain.info/)
Available testnet seeds [`here`](https://testnet-seed.thorchain.info/)

### Explorer URL
* Mainnet: [`https://thorchain.net`](https://thorchain.net)
* Testnet: [`https://thorchain.net`](https://thorchain.net)

### Chain ID
* Mainnet: `thorchain`
* Testnet: `thorchain`

## Dependencies

* [`@xchainjs/xchain-cosmos`](http://docs.xchainjs.org/xchain-client/xchain-cosmos/how-to-use.html)
* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
By default, the index is 0. - `44/931/0/0`

## Blockchain-specific functions

It doesn't have any blockchain-specific functions.
