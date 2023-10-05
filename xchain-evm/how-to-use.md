---
sort: 1
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-evm
```

The following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-evm`.

```bash
yarn add @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util axios ethers
```

## Basic example usage 

This package is perfect if you need support for a EVM chain compatible with ethersjs that is not yet supported within Xchain. You may need to override some methods if the chain in question has specific behaviors. 

If you do so, don't forget to leave it in PR so that other community members can use your work.

You can check [here] an example of usage

[here]: https://github.com/xchainjs/xchainjs-lib/blob/master/packages/xchain-ethereum/src/client.ts

