---
sort: 1
---

# How it works

Implements the following:

```javascript
interface BitcoinClient {
  generatePhrase(): string
  setPhrase(phrase?: string): void
  validatePhrase(phrase: string): boolean
  purgeClient(): void
  setNetwork(net: Network): void
  getNetwork(net: Network): Bitcoin.networks.Network
  setBaseUrl(endpoint: string): void
  getAddress(): string
  validateAddress(address: string): boolean
  scanUTXOs(): Promise<void>
  getBalance(): number
  getBalanceForAddress(address?: string): Promise<number>
  getTransactions(address: string): Promise<Txs>
  calcFees(memo?: string): Promise<object>
  vaultTx(addressVault: string, valueOut: number, memo: string, feeRate: number): Promise<string>
  normalTx(addressTo: string, valueOut: number, feeRate: number): Promise<string>
}
```

## Modules

- `client` - Custom client for communicating with Bitcoin using [BIP39](https://github.com/bitcoinjs/bip39) [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib) and [WIF](https://github.com/bitcoinjs/wif)
