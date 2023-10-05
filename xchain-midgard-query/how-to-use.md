---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-midgard-query
```

Following peer dependencies have to be installed into your project. These are not included in `@xchainjs/xchain-midgard-query`.

```
yarn add @xchainjs/xchain-client @xchainjs/xchain-util @xchainjs/xchain-midgard axios axios-retry bignumber.js
```

## Basic usage examples
```ts
import { AssetBTC } from '@xchainjs/xchain-bitcoin'
import { AssetATOM } from '@xchainjs/xchain-cosmos'
import { Midgard, MidgardCache, MidgardQuery, SaversPosition } from '@xchainjs/xchain-midgard-query'
import { Network } from '@xchainjs/xchain-client'

const saverBtc: getSaver = {
  asset: AssetBTC,
  address: '',
}
const saverAtom: getSaver = {
  asset: AssetATOM,
  address: '',
}

const midgardCache = new MidgardCache(new Midgard(Network.Testnet))
const midgardQuery = new MidgardQuery(midgardCache)
// Get saver positions (cached)
const getSavers: SaversPosition[] = await midgardQuery.getSaverPositions([saverAtom, saverBtc])
// Get thorname info (no cached)
const thorname = await midgardQuery.midgardCache.midgard.getTHORNameDetails('gx')
```

