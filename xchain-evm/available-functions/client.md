# Client

**Extends xchain_client_1.BaseXChainClient**

Custom EVM client

## Parameters

-   `params` **EVMClientParams** 
    -   `params.chain`  
    -   `params.gasAsset`  
    -   `params.gasAssetDecimals`  
    -   `params.defaults`  
    -   `params.network`   (optional, default `xchain_client_1.Network.Mainnet`)
    -   `params.feeBounds`  
    -   `params.providers`  
    -   `params.phrase`   (optional, default `''`)
    -   `params.rootDerivationPaths`  
    -   `params.explorerProviders`  
    -   `params.dataProviders`  

## purgeClient

Purge client.

Returns **void** 

## getAddress

### Parameters

-   `walletIndex`   (optional, default `0`)

**Meta**

-   **deprecated**: this function eventually will be removed use getAddressAsync instead


## getAddressAsync

Get the current address.

### Parameters

-   `walletIndex` **[number][1]** (optional) HD wallet index (optional, default `0`)


-   Throws **any** Error
    Thrown if HDNode is not defined. Note: A phrase is needed to create a wallet and to derive an address from it.
-   Throws **any** Error
    Thrown if wallet index &lt; 0.

Returns **Address** The current address.

## getWallet

Get etherjs wallet interface.

### Parameters

-   `walletIndex` **[number][1]** (optional) HD wallet index (optional, default `0`)


-   Throws **any** Error
    Thrown if HDNode is not defined. Note: A phrase is needed to create a wallet and to derive an address from it.

Returns **Wallet** The current etherjs wallet interface.

## getProvider

Get etherjs Provider interface.

Returns **Provider** The current etherjs Provider interface.

## getExplorerUrl

Get the explorer url.

Returns **[string][2]** The explorer url for ethereum based on the current network.

## getAssetInfo

Returns **any** asset info

## getExplorerAddressUrl

Get the explorer url for the given address.

### Parameters

-   `address` **Address** 

Returns **[string][2]** The explorer url for the given address.

## getExplorerTxUrl

Get the explorer url for the given transaction id.

### Parameters

-   `txID` **[string][2]** 

Returns **[string][2]** The explorer url for the given transaction id.

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** 


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## setPhrase

Set/update a new phrase (Eg. If user wants to change wallet)

### Parameters

-   `phrase` **[string][2]** A new phrase.
-   `walletIndex` **[number][1]** (optional) HD wallet index (optional, default `0`)


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][3]** `true` or `false`

## getBalance

Get the balance of a given address.

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

-   `txId` **[string][2]** The transaction id.
-   `assetAddress` **[string][2]** The asset address. (optional)


-   Throws **`"Need to provide valid txId"`** Thrown if the given txId is invalid.

Returns **Tx** The transaction details of the given transaction id.

## call

Call a contract function.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.signer`  
    -   `$0.contractAddress`  
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.abi`  
    -   `$0.funcName`  
    -   `$0.funcParams`   (optional, default `[]`)
-   `Signer` **signer** (optional) The address a transaction is send from. If not set, signer will be defined based on `walletIndex`
-   `contractAddress` **Address** The contract address.
-   `walletIndex` **[number][1]** (optional) HD wallet index
-   `abi` **ContractInterface** The contract ABI json.
-   `funcName` **[string][2]** The function to be called.
-   `funcParams` **[Array][4]&lt;unknown>** (optional) The parameters of the function.

Returns **T** The result of the contract function call.

## estimateCall

Call a contract function.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.abi`  
    -   `$0.funcName`  
    -   `$0.funcParams`   (optional, default `[]`)
-   `contractAddress` **Address** The contract address.
-   `abi` **ContractInterface** The contract ABI json.
-   `funcName` **[string][2]** The function to be called.
-   `funcParams` **[Array][4]&lt;any>** The parameters of the function.
-   `walletIndex` **[number][1]** (optional) HD wallet index

Returns **BigNumber** The result of the contract function call.

## isApproved

Check allowance.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.amount`  
    -   `$0.walletIndex`  
-   `contractAddress` **Address** The contract address.
-   `spenderAddress` **Address** The spender address.
-   `amount` **BaseAmount** The amount to check if it's allowed to spend or not (optional).
-   `walletIndex` **[number][1]** (optional) HD wallet index

Returns **[boolean][3]** `true` or `false`.

## approve

Check allowance.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.feeOption`   (optional, default `xchain_client_1.FeeOption.Fastest`)
    -   `$0.amount`  
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.signer`  
-   `contractAddress` **Address** The contract address.
-   `spenderAddress` **Address** The spender address.
-   `Signer` **signer** (optional) The address a transaction is send from. If not set, signer will be defined based on `walletIndex`
-   `FeeOption` **feeOption** Fee option (optional)
-   `amount` **BaseAmount** The amount of token. By default, it will be unlimited token allowance. (optional)
-   `walletIndex` **[number][1]** (optional) HD wallet index


-   Throws **any** Error If gas could not been estimated

Returns **TransactionResponse** The transaction result.

## estimateApprove

Estimate gas for calling `approve`.

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.fromAddress`  
    -   `$0.contractAddress`  
    -   `$0.spenderAddress`  
    -   `$0.amount`  
-   `contractAddress` **Address** The contract address.
-   `spenderAddress` **Address** The spender address.
-   `fromAddress` **Address** The address the approve transaction is sent from.
-   `amount` **BaseAmount** The amount of token. By default, it will be unlimited token allowance. (optional)

Returns **BigNumber** Estimated gas

## transfer

Transfers ETH or ERC20 token

Note: A given `feeOption` wins over `gasPrice` and `gasLimit`

### Parameters

-   `$0` **[Object][5]** 
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.signer`  
    -   `$0.asset`   (optional, default `this.gasAsset`)
    -   `$0.memo`  
    -   `$0.amount`  
    -   `$0.recipient`  
    -   `$0.feeOption`   (optional, default `xchain_client_1.FeeOption.Fast`)
    -   `$0.gasPrice`  
    -   `$0.maxFeePerGas`  
    -   `$0.maxPriorityFeePerGas`  
    -   `$0.gasLimit`  
-   `params` **TxParams** The transfer options.
-   `Signer` **signer** (optional) The address a transaction is send from. If not set, signer will be defined based on `walletIndex`
-   `FeeOption` **feeOption** Fee option (optional)
-   `BaseAmount` **gasPrice** Gas price (optional)
-   `BigNumber` **gasLimit** Gas limit (optional)


-   Throws **any** Error Thrown if address of given `Asset` could not be parsed

Returns **TxHash** The transaction hash.

## estimateGasPrices

Estimate gas price.

### Parameters

-   `protocol` **Protocol** Protocol to interact with. If there's no protocol provided, fee rates are retrieved from chain data providers

Returns **GasPrices** The gas prices (average, fast, fastest) in `Wei` (`BaseAmount`)

## estimateGasLimit

Estimate gas.

### Parameters

-   `params` **TxParams** The transaction and fees options.
    -   `params.asset`  
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.memo`  
    -   `params.from`  


-   Throws **any** Error Thrown if address could not parsed from given ERC20 asset

Returns **BaseAmount** The estimated gas fee.

## estimateFeesWithGasPricesAndLimits

Estimate gas prices/limits (average, fast fastest).

### Parameters

-   `params` **TxParams** 

Returns **FeesWithGasPricesAndLimits** The estimated gas prices/limits.

## prepareTx

Prepare transfer.

### Parameters

-   `params` **TxParams&Address&FeeOption&BaseAmount&BigNumber** The transfer options.
    -   `params.sender`  
    -   `params.asset`   (optional, default `this.gasAsset`)
    -   `params.memo`  
    -   `params.amount`  
    -   `params.recipient`  

Returns **PreparedTx** The raw unsigned transaction.

## prepareApprove

Prepare transfer.

### Parameters

-   `params` **ApproveParams&Address&FeeOption&BaseAmount&BigNumber** The transfer options.
    -   `params.contractAddress`  
    -   `params.spenderAddress`  
    -   `params.amount`  
    -   `params.sender`  

Returns **PreparedTx** The raw unsigned transaction.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
