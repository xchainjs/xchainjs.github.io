---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-kuji
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-kuji`.

```
yarn add @xchainjs/xchain-cosmos-sdk @xchainjs/xchain-client @xchainjs/xchain-util
```

## Basic Usage Example 
###Imports
```ts
import { Client } from "@xchainjs/xchain-kuji"
```

### Initialize Kuji client
Network default is Mainnet
```ts
kujiClientWithDefaultParams = new KujiraClient({
  network: Network.Testnet,
  phrase: phraseOne,
})
```
