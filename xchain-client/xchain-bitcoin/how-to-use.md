---
sort: 2
---

# How to use

## Installation

```
yarn add @xchainjs/xchain-bitcoin
```

## Bitcoin Client Testing

```
yarn install
yarn test
```

## Usage

## Create a client instance.

Set `phrase`, `network`, `nodeUrl`, `nodeApiKey` when creating an instance.

```
const client = new Client({ phrase, network, nodeUrl, nodeApiKey })
```

Or use following to set them.

```
client.setNetwork(network)

client.setPhrase(phrase')

client.setNodeURL(nodeUrl)

client.setNodeAPIKey(nodeApiKey)
```
