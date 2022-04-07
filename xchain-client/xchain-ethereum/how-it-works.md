---
sort: 1
---

# How it works

## Third-party library

It communicates with Ethereum Chain by using [`ethers`](https://github.com/ethers-io/ethers.js/)

### Client URL

* Mainnet: `https://api.blockchair.com/ethereum`, `https://api.etherscan.io`
* Testnet: `https://api.blockchair.com/ethereum/testnet`, `https://api-goerli.etherscan.io`

### Explorer URL
* Mainnet: [`https://etherscan.io`](https://etherscan.io/)
* Testnet: [`https://goerli.etherscan.io`](https://goerli.etherscan.io/)

### Network
* Mainnet: `homestead`
* Testnet: `goerli`

## Dependencies

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-crypto`](http://docs.xchainjs.org/xchain-crypto/how-to-use.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)

## Address Generation

It supports the [`BIP44 path derivations`](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

By default, the index is 0. - `44/30/0/0`

## Blockchain-specific functions

It doesn't have any blockchain-specific functions.
