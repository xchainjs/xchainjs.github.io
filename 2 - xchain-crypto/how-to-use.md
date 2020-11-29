---
sort: 2
---

# How to use

## Installation

- Install `@xchainjs/xchain-crypto` from `npm`

```bash
yarn add @xchainjs/xchain-crypto
```

## Development

### Build

```bash
yarn build
```

### Tests

```bash
yarn test
```

## Usage

### Generate phrase

Use `generatePhrase` to generate a new phrase.
```
generatePhrase(size = 12): string
```
By default, it will generate 12 words phrase.

Example:
```js
import { generatePhrase } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase() // 12 words phrase

const phrase = generatePhrase(24) // 24 words phrase
```

### Validate phrase

Use `validatePhrase` to generate a new phrase.
```
validatePhrase(phrase: string): boolean
```

Example:
```js
import { generatePhrase, validatePhrase } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const is_valid = validatePhrase(phrase) // true

const is_valid = validatePhrase('invalid phrase here') // false
```

## Get seed

Use `getSeed` to get seed from a given phrase. It will use `bip39.mnemonicToSeedSync(phrase)` internally.
```
getSeed = (phrase: string): Buffer
```

Example:
```js
import { generatePhrase, getSeed } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const seed = getSeed(phrase)
```

## Get address

Use `getAddress` to get address from a given phrase. It will derive hd-path for thorchain(`m/44'/931'/0'/0/0`) internally.
```
getAddress(phrase: string): string
```

Example:
```js
import { generatePhrase, getAddress } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const address = getAddress(phrase)
```

## Get public keys

Use `getPublicKeyPair` to get `secp256k1` and `ed25519` public keys from a given phrase at once.
```
type PublicKeyPair = {
  secp256k1: PubKeySecp256k1 | null
  ed25519: PubKeyEd25519
}

getPublicKeyPair(phrase: string): PublicKeyPair
```

Example:
```js
import { generatePhrase, getPublicKeyPair } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const public_keys = getPublicKeyPair(phrase)

const secp256k1_pub_key = public_keys.secp256k1 // secp256k1 public key
const ed25519_pub_key = public_keys.ed25519 // ed25519 public key
```

### Generate keystore

Use `encryptToKeyStore` to generate a new keystore.
```
type Keystore = {
  publickeys: PublicKeyPair
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
encryptToKeyStore(phrase: string, password: string): Promise<Keystore>
```

Example:
```js
import { generatePhrase, encryptToKeyStore } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const password = 'thorchain'
const keystore = await encryptToKeyStore(phrase, password)
```

## Decrypt keystore

Use `decryptFromKeystore` to get phrase back from a keystore.
```
decryptFromKeystore(keystore: Keystore, password: string): Promise<string>
```

Example:
```js
import { generatePhrase, encryptToKeyStore } from '@xchainjs/xchain-crypto'

const phrase = generatePhrase()
const password = 'thorchain'
const keystore = await encryptToKeyStore(phrase, password)
const phraseDecrypted = await decryptFromKeystore(keystore, password)
```
