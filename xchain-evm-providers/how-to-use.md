---
sort: 2
---

# How to use

## Installation

```bash
yarn add @xchainjs/xchain-evm-providers
```

## Example

```typescript
    import { AssetETH, ETHChain } from '@xchainjs/xchain-ethereum'
    import { Client as EthClient } from '@xchainjs/xchain-ethereum'

    // Chain ids list: https://www.covalenthq.com/docs/networks/
    const COVALENT_ONLINE_PROVIDER_MAINNET = new CovalentProvider(process.env.COVALENT_API_KEY as string, ETHChain, 1, AssetETH, 18)

    const covalentProviders = {
        [Network.Mainnet]: COVALENT_ONLINE_PROVIDER_MAINNET,
        [Network.Testnet]: COVALENT_ONLINE_PROVIDER_MAINNET,
        [Network.Stagenet]: COVALENT_ONLINE_PROVIDER_MAINNET,
    }

    const ETHERSCAN_ONLINE_PROVIDER_MAINNET = new EtherscanProvider(
        ETH_MAINNET_ETHERS_PROVIDER,
        'https://api.etherscan.io/',
        process.env['ETHERSCAN_API'] || '',
        ETHChain,
        AssetETH,
        ETH_GAS_ASSET_DECIMAL,
    )

    const ethscanProviders = {
        [Network.Mainnet]: ETHERSCAN_ONLINE_PROVIDER_MAINNET,
        [Network.Testnet]: ETHERSCAN_ONLINE_PROVIDER_MAINNET,
        [Network.Stagenet]: ETHERSCAN_ONLINE_PROVIDER_MAINNET,
    }

    export const defaultEthParams: EVMClientParams = {
        chain: ETHChain,
        gasAsset: AssetETH,
        gasAssetDecimals: ETH_GAS_ASSET_DECIMAL,
        defaults,
        providers: ethersJSProviders,
        explorerProviders: ethExplorerProviders,
        dataProviders: [ethscanProviders, covalentProviders],
        network: Network.Testnet,
        feeBounds: {
            lower: LOWER_FEE_BOUND,
            upper: UPPER_FEE_BOUND,
        },
        rootDerivationPaths: ethRootDerivationPaths,
    }

    const client = new EthClient({ ...defaultEthParams, network: settings.network, phrase }),
```


