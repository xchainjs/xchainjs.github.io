---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-mayamidgard
```

## Basic usage examples

```ts
import { MidgardApi, Configuration } from '@xchainjs/xchain-mayamidgard'

const apiconfig = new Configuration({ basePath: baseUrl })
const midgardApi = new MidgardApi(apiconfig)
const data = midgardApi.getPool('BTC.BTC')
console.log(data.data)
```