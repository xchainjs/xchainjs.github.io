---
sort: 1
---

# Cookbook

Tis page list handy snippets for using xchainjs, for more examples please see the [Sample Projects](sampleprojects)

## Recipes

- [Creating a random seed phrase](#creating-a-random-seed-phrase)
- [Using a HW wallet via @shapeshiftoss/hdwallet](#using-a-hw-wallet-via-shapeshiftosshdwallet)
- [Changing default Providers for 3rd party functions](#changing-default-providers-for-3rd-party-functions)

### Creating a random seed phrase
1. install the right libraries (npm,yarn,pnpm,etc)
    ```bash
    # install the required base lib
    yarn add @xchainjs/xchain-crypto 
    ```
2. example code
    ```ts
    import { generatePhrase } from '@xchainjs/xchain-crypto'

    //12 word default 
    const phrase = generatePhrase()

    //24 word  
    const phrase = generatePhrase(24)
    ```

### Using a HW wallet via @shapeshiftoss/hdwallet

Xchainjs directly supports using @shapeshiftoss/hdwallet for using a HW wallet 

1. install the right libraries (npm,yarn,pnpm,etc)
    ```bash
    # install the required base lib
    yarn add @xchainjs/xchain-client 

    # install chains you want to interact with
    yarn add @xchainjs/xchain-bitcoin @xchainjs/xchain-ethereum 

    # install hdwallet (pick the wallets you want to support)
    yarn add @shapeshiftoss/hdwallet-core
    yarn add @shapeshiftoss/hdwallet-keepkey-webusb
    yarn add @shapeshiftoss/hdwallet-trezor-connect
    yarn add @shapeshiftoss/hdwallet-ledger-webusb
    ```
2. example code  
    ```ts
    // import HD wallets you want
    import { HDWallet } from "@shapeshiftoss/hdwallet-core";
    import { isKeepKey, KeepKeyHDWallet } from "@shapeshiftoss/hdwallet-keepkey";
    import { isLedger, LedgerHDWallet } from "@shapeshiftoss/hdwallet-ledger";
    import { isTrezor, TrezorHDWallet } from "@shapeshiftoss/hdwallet-trezor";
    import { Keyring } from "@shapeshiftoss/hdwallet-core";
    
    import { WebUSBKeepKeyAdapter } from "@shapeshiftoss/hdwallet-keepkey-webusb";
    import { WebUSBLedgerAdapter } from "@shapeshiftoss/hdwallet-ledger-webusb";
    import { TrezorAdapter } from "@shapeshiftoss/hdwallet-trezor-connect";

    //import chains you want  
    import { BtcClient } from '@xchainjs/xchain-bitcoin';
    import { EthClient } from '@xchainjs/xchain-ethereum';

    const network = 'testnet'
    const keyring = new Keyring();
    
    // figure out the users wallet
    let hwWallet: HDWallet | undefined = undefined
    if(isKeepKey){
        const keepkeyAdapter = WebUSBKeepKeyAdapter.useKeyring(keyring);
        hwWallet = await keepkeyAdapter.pairDevice();
    } else if (isTrezor){
        const trezorAdapter = TrezorAdapter.useKeyring(
            keyring, {
            debug: false,
            manifest: {
                email: "you@example.com", // TrezorConnect info
                appUrl: "https://example.com", // URL of hosted domain
            },
            }
        ); 
        hwWallet = await trezorAdapter.pairDevice();
    } else if (isLedger){
        const ledgerAdapter = LedgerAdapter.useKeyring(keyring);
         hwWallet = await ledgerAdapter.pairDevice();
    }
    const label = await hwWallet.getLabel()
    console.log(`connected to - ${label}`)
    
    const btcClient = BtcClient({ network, wallet: hwWallet})
    const ethClient = EthClient({ network, wallet: hwWallet})

    ```

### Changing default Providers for 3rd party functions 

Network functionality (broadcasting txs, reading balances, etc) and implemented using Providers

1. install the right libraries (npm,yarn,pnpm,etc)
    ```bash
    # install the required base lib
    yarn add @xchainjs/xchain-client 

    # install chains you want to interact with
    yarn add @xchainjs/xchain-bitcoin @xchainjs/xchain-ethereum 
    ```
2. Setup the client libs  
    ```ts

    import { Providers, Explorers } from '@xchainjs/xchain-client';
    
    //import chains you want  
    import { BtcClient } from '@xchainjs/xchain-bitcoin';
    import { EthClient } from '@xchainjs/xchain-ethereum';

    const network = 'testnet'
    const phrase = 'atom green various power must another rent imitate gadget creek fat then'

    const config = {
        network,
        phrase,
        explorer: Explorers.ETH.ETHERSCAN,
        providers: {
            // all methods take an array of providers, they will be invoked in order until one returns a success 
            getBalance:         [Providers.ETH.BLOCKCHAIR,Providers.ETH.ETHERSCAN],
            getTransactions:    [Providers.ETH.BLOCKCHAIR,Providers.ETH.ETHERSCAN],
            getFees:            [Providers.ETH.ETHPLORER,Providers.ETH.ETHERSCAN],
            transfer:           [Providers.ETH.ETHERSCAN],
        }
    }

    const btcClient = BtcClient({ network, phrase})
    const ethClient = EthClient({ network, phrase})

    ```

```note
### This is a note

Markdown is supported, Text can be **bold**, _italic_, or ~~strikethrough~~. [Links](https://github.com) should be blue with no underlines

`inline code`

[`inline code inside link`](#)
```