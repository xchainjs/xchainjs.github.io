---
sort: 1
---

# How it works

## Design

The UtxoOnlineDataProvider has the following signature:

```typescript
import { Address, Asset } from '@xchainjs/xchain-util'

import { ExplorerProvider } from './explorer-provider'
import { Balance, Network, Tx, TxHash, TxHistoryParams, TxsPage } from './types'

export type Witness = {
  value: number
  script: Buffer
}
export type UTXO = {
  hash: string
  index: number
  value: number
  witnessUtxo: Witness
  txHex?: string
}
export interface OnlineDataProvider {
  getBalance(address: Address, assets?: Asset[]): Promise<Balance[]>
  getTransactions(params: TxHistoryParams): Promise<TxsPage>
  getTransactionData(txId: string, assetAddress?: Address): Promise<Tx>
}
export interface UtxoOnlineDataProvider extends OnlineDataProvider {
  getConfirmedUnspentTxs(address: Address): Promise<UTXO[]>
  getUnspentTxs(address: Address): Promise<UTXO[]>
  broadcastTx(txHex: string): Promise<TxHash>
}
```

## Implementations

### sochain v3

```
Website:          https://sochain.com/api/
Status:           Complete
FreeTier:         No
Chains supported: BTC,BTC-Testnet,LTC,LTC-Testnet,DOGE,DOGE-Testnet
```

### blockcypher

```
Website:         https://www.blockcypher.com/
Status:           Complete
FreeTier:         Yes, rate limited 3 reqs/sec
Chains supported: BTC,BTC-Testnet,LTC,DOGE
```

### haskoin

```
Website:         https://www.haskoin.com/
Status:           Complete
FreeTier:         Yes, rate limit unknown
Chains supported:  BTC,BTC-Testnet,BCH,BCH-Testnet
```