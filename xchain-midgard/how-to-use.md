---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-midgard
```

## Basic usage examples

```ts
//Imports
import { MidgardApi, Configuration, MIDGARD_API_TS_URL } from '@xchainjs/xchain-midgard'

const baseUrl = MIDGARD_API_TS_URL
const apiconfig = new Configuration({ basePath: baseUrl })
const midgardApi = new MidgardApi(apiconfig)
const data = midgardApi.getPool('BTC.BTC')
console.log(data.data)

```