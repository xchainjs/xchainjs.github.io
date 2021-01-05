# Client

Custom Ethereum client

## Parameters

-   `params` **ClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.blockchairUrl`   (optional, default `''`)
    -   `params.blockchairNodeApiKey`   (optional, default `''`)
    -   `params.phrase`  
    -   `params.vault`  
    -   `params.etherscanApiKey`  

## purgeClient

Purge client.

Returns **void** 

## setBlockchairNodeURL

Set/Update the blockchair url.

### Parameters

-   `url` **[string][1]** The new blockchair url.

Returns **void** 

## setBlockchairNodeAPIKey

Set/Update the blockchair api key.

### Parameters

-   `key` **[string][1]** The new blockchair api key.

Returns **void** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

## getAddress

Get the current address.

-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## getVault

Get the vault address.

-   Throws **`"Vault must be provided"`** Thrown if vault has not been set before. A vault is needed to send a vault transaction.

Returns **Address** The current vault address.

## getWallet

Get etherjs wallet interface.

-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Wallet** The current etherjs wallet interface.

## getProvider

Get etherjs Provider interface.

Returns **Provider** The current etherjs Provider interface.

## getEtherscanProvider

Get etherjs EtherscanProvider interface.

Returns **EtherscanProvider** The current etherjs EtherscanProvider interface.

## getExplorerUrl

Get the explorer url.

Returns **[string][1]** The explorer url.

## getExplorerAddressUrl

Get the explorer url for the given address.

### Parameters

-   `address` **Address** 

Returns **[string][1]** The explorer url for the given address.

## getExplorerTxUrl

Get the explorer url for the given transaction id.

### Parameters

-   `txID` **[string][1]** 

Returns **[string][1]** The explorer url for the given transaction id.

## changeWallet

Changes the wallet eg. when using connect() after init().

### Parameters

-   `wallet` **Wallet** a new wallet

Returns **void** 

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** `mainnet` or `testnet`.


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## setVault

Set/update the current vault address.

### Parameters

-   `vault` **[string][1]** A new vault address.


-   Throws **`"Vault address must be provided"`** Thrown if the given vault address is empty.

Returns **void** 

## setPhrase

Set/update a new phrase (Eg. If user wants to change wallet)

### Parameters

-   `phrase` **[string][1]** A new phrase.


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][2]** `true` or `false`

## getBalance

Get the ETH balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)

Returns **[Array][3]&lt;Balance>** The ETH balance of the address.

## getERC20Balance

Gets the erc20 asset balance of a given address.
By default it will return the balance of the current wallet.

### Parameters

-   `assetAddress` **Address** The erc20 asset address.
-   `address` **Address** (optional)


-   Throws **`"Invalid Address"`** Thrown if address is invalid.
-   Throws **`"Invalid Asset Address"`** Thrown if asset address is invalid.

Returns **[Array][3]&lt;Balance>** The ETH balance of the address.

## getTransactions

Get transaction history of a given address with pagination options.
By default it will return the transaction history of the current wallet.

### Parameters

-   `params` **TxHistoryParams** The options to get transaction history. (optional)

Returns **TxsPage** The transaction history.

## getTransactionData

Get the transaction details of a given transaction id.

### Parameters

-   `txId` **[string][1]** The transaction id.

Returns **Tx** The transaction details of the given transaction id.

## transfer

Transfer ETH.

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.memo`  
    -   `params.amount`  
    -   `params.recipient`  

Returns **TxHash** The transaction hash.

## call

Call a contract function.

### Parameters

-   `address` **Address** The contract address.
-   `abi` **ContractInterface** The contract ABI json.
-   `func` **[string][1]** The function to be called.
-   `params` **[Array][3]&lt;any>** The parameters of the function.


-   Throws **`"address must be provided"`** Thrown if the given contract address is empty.

Returns **T** The result of the contract function call.

## vaultTx

Send a transaction to the vault.

### Parameters

-   `address` **Address** The contract address.
-   `amount` **BaseAmount** The amount to be transferred.
-   `memo` **[string][1]** The memo to be set.

Returns **TransactionResponse** The vault transaction result.

## normalTx

Send ETH transaction.

### Parameters

-   `params` **NormalTxOpts** The ETH transaction options.
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.overrides`  

Returns **TransactionResponse** The transaction result.

## getFees

Get the current gas price.

Returns **Fees** The current gas price.

## estimateNormalTx

Estimate gas for ETH transfer.

### Parameters

-   `params` **NormalTxOpts** The ETH transaction options.
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.overrides`  

Returns **BaseAmount** The estimated gas fee.

## estimateGasERC20Tx

Estimate gas for erc20 token transfer.

### Parameters

-   `params` **EstimateGasERC20Opts** The erc20 transaction options.
    -   `params.assetAddress`  
    -   `params.recipient`  
    -   `params.amount`  


-   Throws **`"Invalid Address"`** Thrown if the given address is invalid.
-   Throws **`"Invalid Asset Address"`** Thrown if the given asset address is invalid.
    \*

Returns **BaseAmount** The estimated gas fee.

## erc20Tx

Transfer erc20 tokens.

### Parameters

-   `params` **Erc20TxOpts** The erc20 transaction options.
    -   `params.assetAddress`  
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.overrides`  


-   Throws **`"Invalid Address"`** Thrown if the given address is invalid.
-   Throws **`"Invalid Asset Address"`** Thrown if the given asset address is invalid.

Returns **TransactionResponse** The transaction result.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array