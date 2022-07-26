---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-thornode
```

## Basic usage examples

```ts

// THORNODE_API_9R_URL - default exported URL
import { NetworkApi, THORNODE_API_9R_URL, Configuration, TransactionsApi, QueueApi} from '@xchainjs/xchain-thornode'

    const baseUrl = THORNODE_API_9R_URL
    const apiConfigMID = new Configuration({basePath: baseUrl})
    const thornode = new TransactionsApi(apiConfigMID)
    const queueApi = new QueueApi(apiConfigMID)
    const networkApi = new NetworkApi(apiConfigMID)
    const scheduledOutbound = await queueApi.queueScheduled()
    const queueOutbound = await queueApi.queueOutbound()
    const lastBlock = await networkApi.lastblock()
    const test = await thornode.tx("BDF3507E7A4E4966BF415DD786AFD31AFA04FBF22BEA2EF2B906C9F067A30D83")


    console.log(test.data.observed_tx)
    const lastBlockHeight = lastBlock.data.find((item) => item.thorchain)
    console.log(queueOutbound.data.find((item) => item.chain))
    const schedHeight = scheduledOutbound.data.find((item) => item.height)
    console.log(lastBlockHeight)
    console.log(schedHeight)

```