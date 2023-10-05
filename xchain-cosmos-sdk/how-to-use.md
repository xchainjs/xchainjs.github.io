---
sort: 1
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-cosmos-sdk
```

The following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-cosmos-sdk`.

```bash
yarn add @xchainjs/xchain-client @xchainjs/xchain-crypto @xchainjs/xchain-util
```

## Basic example usage 

This package is perfect if you need support for a chain built on top of Cosmos-sdk that is not yet supported within Xchain. You may need to override some methods if the chain in question has specific behaviors. 

If you do so, don't forget to leave it in PR so that other community members can use your work.

You can check [here] an example of usage

[here]: https://github.com/xchainjs/xchainjs-lib/blob/master/packages/xchain-kujira/src/client.ts

