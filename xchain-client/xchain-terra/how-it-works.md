---
sort: 1
---

# How it works

## Third-party library

Terra.js a JavaScript SDK for writing applications that interact with the Terra blockchain `@terra-money/terra.js`, [https://www.npmjs.com/package/@terra-money/terra.js]
Exposes the Terra API through [`LCDClient`](https://docs.terra.money/docs/develop/sdks/terra-js/query-data.html)

### Client URL
* Mainnet: `https://fcd.terra.dev`
* Testnet: `https://fcd.terra.dev`

### Explorer URL
* Mainnet: [`https://finder.terra.money/mainnet`](https://finder.terra.money)
* Testnet: [`https://finder.terra.money/testnet/`](https://finder.terra.money)

## Dependencies

* [`@xchainjs/xchain-client`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-client)
* [`@xchainjs/xchain-crypto`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-crypto)
* [`@xchainjs/xchain-util`](https://github.com/xchainjs/xchainjs-lib/packages/xchain-util)

## Address Generation

By default, the index is 0. - `44'/330'/0'/0/` for mainnet, `44'/330'/0'/0/` for testnet

## Blockchain-specific functions

It doesn't have any blockchain-specific functions.
