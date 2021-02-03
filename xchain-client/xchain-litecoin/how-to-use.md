---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-litecoin
```

## Litecoin Client Testing

```
yarn install
yarn test
```

## Usage

Initialize client and use class methods:

```
import { Client, Network } from '../src/client'

const liteClient = new Client(Network.TEST)

const newPhrase = liteClient.generatePhrase()
```
