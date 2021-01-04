---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-cosmos
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-cosmos`.

```bash
yarn add cosmos-client
```

## Cosmos Client Testing

```bash
yarn install
yarn test
```

## Create a client instance.

Set `phrase` and `network` when creating an instance.

```ts
const client = new Client({ phrase, network })
```
