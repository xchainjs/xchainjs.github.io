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

## Basic example usage

### Generate new phrase and encrypt

By default, it will generate 12 words phrase.\
Create a new phrase using generatePhrase()\
Check phrase validity using validatePhrase()\
Encrypt to keystore using encryptToKeyStore() > takes two arguements (phrase, password)\

```ts
// Imports
import { generatePhrase, validatePhrase, encryptToKeyStore, decryptFromKeystore } from "@xchainjs/xchain-crypto"

require('dotenv').config();

const keystore1 = JSON.parse(fs.readFileSync('keystore.json', 'utf8'))
const password = process.env.PASSWORD

// Generate Keystore and save it to a keystore file
const GenerateKeystore = async () => {
    const phrase = generatePhrase()
    console.log(`phrase ${phrase}`)
    const isCorrect = validatePhrase(phrase) //validate phrase if needed returns Boolean
    console.log(`Phrase valid?: ${isCorrect}`)
    const keystore = await encryptToKeyStore(phrase, password)
    fs.writeFileSync(`./keystore.json`, JSON.stringify(keystore, null, 4), 'utf8')
}
```

### Decrypt keystore to retrieve phrase

Retrieve phrase by calling decryptFromKeystore()\

```ts
const connectWallet = async () => {
    let phrase = await decryptFromKeystore(keystore1, password)
    console.log(`Phrase: ${phrase}`)
}
```

### Retrieve seed
Retrieve phrase by calling decryptFromKeystore()

```ts
import { decryptFromKeystore, getSeed } from '@xchainjs/xchain-crypto'

const connectWallet = async () => {
    let phrase = await decryptFromKeystore(keystore1, password)
    console.log(`Phrase: ${phrase}`)
}
```

### Keystore type

```ts
type Keystore = {
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

### Constants

```ts
// Crypto Constants for xchain
const cipher = 'aes-128-ctr'
const kdf = 'pbkdf2'
const prf = 'hmac-sha256'
const dklen = 32
const c = 262144
const hashFunction = 'sha256'
const meta = 'xchain-keystore'
```
