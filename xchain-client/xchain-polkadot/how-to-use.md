---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-polkadot
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-polkadot`.

```
yarn add @polkadot/api
```

## Polkadot Client Testing

```
yarn install
yarn test
```

## Create a client instance.

Set `phrase` and `network` when creating an instance.

```
const client = new Client({ phrase, network })
```
