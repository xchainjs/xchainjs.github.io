---
sort: 1
---

# How it works

## Design

```typescript
import { Address, Asset } from '@xchainjs/xchain-util'

import { ExplorerProvider } from './explorer-provider'
import { Balance, Network, Tx, TxHash, TxHistoryParams, TxsPage } from './types'

export interface OnlineDataProvider {
  getBalance(address: Address, assets?: Asset[]): Promise<Balance[]>
  getTransactions(params: TxHistoryParams): Promise<TxsPage>
  getTransactionData(txId: string, assetAddress?: Address): Promise<Tx>
}
```

## Implementations

### Etherscan / bscscan / snowtrace

```
Websites:         https://snowtrace.io/ , https://bscscan.com/ , https://etherscan.io/
Status:           Complete
FreeTier:         Yes
Chains supported: ETH, BSC, ETH
```

### Covalent

```
Website:          https://www.covalenthq.com/
Status:           Complete
FreeTier:         Yes
Chains supported: ETH, BSC, ETH
```
