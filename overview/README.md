---
sort: 1
---

# Overview

Overview for XChainJS

## Interface

The interface is [defined here.](https://github.com/xchainjs/xchainjs-lib/blob/master/packages/xchain-client/README.md)

### Common Interface
The interface supports as a minimum the following functions for each blockchain:

1) Initialise with a valid BIP39 phrase and specified network (testnet/mainnet)
2) Get the address, with support for BIP44 path derivations (default is Index 0)
3) Get the balance (UTXO or account-based)
4) Get transaction history for that address
5) Get transaction data for the transaction ID/hash
6) Make a simple transfer
7) Get blockchain fee information (standard, fast, fastest)

### Extended Interface

Some blockchains have different functions. More advanced logic can be built by extending the interface, such as for Binance Chain and Cosmos chains. 

### Return the Client

For wallets that need even more flexibility (smart contract blockchains) the client can be retrieved and the wallet is then free to handle directly. 

## XChainJS uses following libraries, frameworks and more:

- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib)
- [@binance-chain/javascript-sdk](https://github.com/binance-chain/javascript-sdk)
- [@ethersproject](https://github.com/ethers-io/ethers.js)
- [cosmos-client](https://github.com/cosmos-client/cosmos-client-ts)
- [PolkadotJS](https://github.com/polkadot-js)

![Test](https://github.com/thorchain/asgardex-electron/workflows/Test/badge.svg)

## Tests

### `unit`

```bash
yarn test
```

## Development

`lerna bootstrap`


## Releasing

See [RELEASE.md](./RELEASE.md)


## Contributing

Please see the Contributing Guidelines here (_coming soon_).

## Bug Reports

Please see the Bug Report Process here (_coming soon_).
