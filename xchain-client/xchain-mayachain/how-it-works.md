---
sort: 1
---

# How it works

## Third-party library

It communicates with Thorchain by using [`cosmos-client`](https://github.com/cosmos-client/cosmos-client-ts)

### Client URL
* Mainnet: `http://3.132.133.211:1317`
* Testnet: `http://3.16.115.200:1317`

Available mainnet seeds [`here`](https://mayanode.mayachain.info/mayachain/nodes)
Available testnet seeds [`here`](https://stagenet.mayanode.mayachain.info/mayachain/nodes)

### Explorer URL
* Mainnet: [`https://www.explorer.mayachain.info`](https://www.explorer.mayachain.info)

### Chain ID
* Mainnet: `mayachain-mainnet-v1`
* Stagenet `mayacgain-stagenet-v1`

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
