---
sort: 2
---

# How to use

## Installation

- Install `@xchainjs/xchain-crypto` from `npm`

```bash
yarn add @xchainjs/xchain-crypto
```

## Usage

### Basic usage

```js
import { generatePhrase, validatePhrase, encryptToKeyStore, decryptFromKeystore } from '../src/crypto'

const phrase = generatePhrase()
const isCorrect = validatePhrase(phrase)
const password = 'thorchain'
const keystore = await encryptToKeyStore(phrase, password)
const phraseDecrypted = await decryptFromKeystore(keystore, password)
```

Keystore Type

```js
export type Keystore = {
  address: string
  crypto: {
    cipher: string
    ciphertext: string
    cipherparams: {
      iv: string
    }
    kdf: string
    kdfparams: {
      prf: string
      dklen: number
      salt: string
      c: number
    }
    mac: string
  }
  id: string
  version: number
  meta: string
}
```

### Error handling

## Development

### Build

```bash
yarn build
```

### Tests

```bash
yarn test
```
