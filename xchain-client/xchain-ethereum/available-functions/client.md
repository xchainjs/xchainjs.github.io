# Client

**Extends xchain_client_1.BaseXChainClient**

Custom Ethereum client

## Parameters

-   `params` **EthereumClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Testnet`)
    -   `params.ethplorerUrl`   (optional, default `'https://api.ethplorer.io'`)
    -   `params.ethplorerApiKey`   (optional, default `'freekey'`)
    -   `params.explorerUrl`  
    -   `params.phrase`   (optional, default `''`)
    -   `params.rootDerivationPaths`   (optional, default ``{[xchain_client_1.Network.Mainnet]:`m/44'/60'/0'/0/`,[xchain_client_1.Network.Testnet]:`m/44'/60'/0'/0/`,[xchain_client_1.Network.Stagenet]:`m/44'/60'/0'/0/`}``)
    -   `params.etherscanApiKey`  
    -   `params.infuraCreds`  

## purgeClient

Purge client.

Returns **void** 

## setExplorerURL

Set/Update the explorer url.

### Parameters

-   `url` **[string][1]** The explorer url.

Returns **void** 

## getAddress

Get the current address.

### Parameters

-   `walletIndex` **[number][2]** (optional) HD wallet index (optional, default `0`)


-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## getWallet

Get etherjs wallet interface.

### Parameters

-   `walletIndex` **[number][2]** (optional) HD wallet index (optional, default `0`)


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

Returns **[string][1]** The explorer url for ethereum based on the current network.

## getDefaultExplorerURL

Get the explorer url.

Returns **ExplorerUrl** The explorer url (both mainnet and testnet) for ethereum.

## getExplorerUrlByNetwork

Get the explorer url.

### Parameters

-   `network` **Network** 

Returns **[string][1]** The explorer url for ethereum based on the network.

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

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** 


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## setPhrase

Set/update a new phrase (Eg. If user wants to change wallet)

### Parameters

-   `phrase` **[string][1]** A new phrase.
-   `walletIndex` **[number][2]** (optional) HD wallet index (optional, default `0`)


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][3]** `true` or `false`

## getBalance

Get the ETH balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `assets`  


-   Throws **`"Invalid asset"`** throws when the give asset is an invalid one

Returns **[Array][4]&lt;Balance>** The all balance of the address.

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
-   `assetAddress` **[string][1]** The asset address. (optional)


-   Throws **`"Need to provide valid txId"`** Thrown if the given txId is invalid.

Returns **Tx** The transaction details of the given transaction id.

## call

Call a contract function.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.contractAddress`  
    -   `$0.abi`  
    -   `$0.funcName`  
    -   `$0.funcParams`   (optional, default `[]`)
-   `walletIndex` **[number][2]** (optional) HD wallet index
-   `contractAddress` **Address** The contract address.
-   `abi` **ContractInterface** The contract ABI json.
-   `funcName` **[string][1]** The function to be called.
-   `funcParams` **[Array][4]&lt;any>** The parameters of the function.


-   Throws **`"contractAddress must be provided"`** Thrown if the given contract address is empty.

Returns **T** The result of the contract function call.

## estimateCall

Call a contract function.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.abi`  
    -   `$0.funcName`  
    -   `$0.funcParams`   (optional, default `[]`)
    -   `$0.walletIndex`   (optional, default `0`)
-   `contractAddress` **Address** The contract address.
-   `abi` **ContractInterface** The contract ABI json.
-   `funcName` **[string][1]** The function to be called.
-   `funcParams` **[Array][4]&lt;any>** The parameters of the function.
-   `walletIndex` **[number][2]** (optional) HD wallet index


-   Throws **`"contractAddress must be provided"`** Thrown if the given contract address is empty.

Returns **BigNumber** The result of the contract function call.

## isApproved

Check allowance.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.amount`  
    -   `$0.walletIndex`   (optional, default `0`)
-   `contractAddress` **Address** The spender address.
-   `spenderAddress` **Address** The spender address.
-   `amount` **BaseAmount** The amount to check if it's allowed to spend or not (optional).
-   `walletIndex` **[number][2]** (optional) HD wallet index

Returns **[boolean][3]** `true` or `false`.

## approve

Check allowance.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.feeOptionKey`   (optional, default `xchain_client_1.FeeOption.Fastest`)
    -   `$0.amount`  
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.gasLimitFallback`  
-   `contractAddress` **Address** The contract address.
-   `spenderAddress` **Address** The spender address.
-   `FeeOption` **feeOptionKey** Fee option (optional)
-   `amount` **BaseAmount** The amount of token. By default, it will be unlimited token allowance. (optional)
-   `walletIndex` **[number][2]** (optional) HD wallet index

Returns **TransactionResponse** The transaction result.

## estimateApprove

Estimate gas limit of approve.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.amount`  
-   `contractAddress` **Address** The contract address.
-   `spenderAddress` **Address** The spender address.
-   `walletIndex` **[number][2]** (optional) HD wallet index
-   `amount` **BaseAmount** The amount of token. By default, it will be unlimited token allowance. (optional)

Returns **BigNumber** The estimated gas limit.

## transfer

Transfer ETH.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.asset`  
    -   `$0.memo`  
    -   `$0.amount`  
    -   `$0.recipient`  
    -   `$0.feeOptionKey`  
    -   `$0.gasPrice`  
    -   `$0.gasLimit`  
-   `params` **TxParams** The transfer options.
-   `FeeOption` **feeOptionKey** Fee option (optional)
-   `BaseAmount` **gasPrice** Gas price (optional)
-   `BigNumber` **gasLimit** Gas limit (optional)A given `feeOptionKey` wins over `gasPrice` and `gasLimit`

Returns **TxHash** The transaction hash.

## estimateGasPrices

-   **See: [https://etherscan.io/apis#gastracker][6]
    **

Estimate gas price.

Returns **GasPrices** The gas prices (average, fast, fastest) in `Wei` (`BaseAmount`)

## estimateGasPricesFromEtherscan

-   **See: [https://etherscan.io/apis#gastracker][6]
    **

Estimate gas price.

-   Throws **`"Failed to estimate gas price"`** Thrown if failed to estimate gas price.

Returns **GasPrices** The gas prices (average, fast, fastest) in `Wei` (`BaseAmount`)

## estimateGasLimit

Estimate gas.

### Parameters

-   `params` **TxParams** The transaction and fees options.
    -   `params.asset`  
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.memo`  

Returns **BaseAmount** The estimated gas fee.

## estimateFeesWithGasPricesAndLimits

Estimate gas prices/limits (average, fast fastest).

### Parameters

-   `params` **TxParams** 

Returns **FeesWithGasPricesAndLimits** The estimated gas prices/limits.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[6]: https://etherscan.io/apis#gastracker
