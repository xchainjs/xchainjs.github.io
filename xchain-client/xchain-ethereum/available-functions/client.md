# Client

Custom Ethereum client

## Parameters

-   `params` **ClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.explorerUrl`  
    -   `params.phrase`  
    -   `params.etherscanApiKey`  

## purgeClient

Purge client.

Returns **void** 

## setExplorerURL

Set/Update the explorer url.

### Parameters

-   `url` **[string][1]** The explorer url.

Returns **void** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

## getAddress

Get the current address.

-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

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
-   `asset`  


-   Throws **`"Invalid asset"`** throws when the give asset is an invalid one

Returns **[Array][3]&lt;Balances>** The all balance of the address.

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

-   `address` **Address** The contract address.
-   `abi` **ContractInterface** The contract ABI json.
-   `func` **[string][1]** The function to be called.
-   `params` **[Array][3]&lt;any>** The parameters of the function.


-   Throws **`"address must be provided"`** Thrown if the given contract address is empty.

Returns **T** The result of the contract function call.

## isApproved

Check allowance.

### Parameters

-   `spender` **Address** The spender address.
-   `sender` **Address** The sender address.
-   `amount` **BaseAmount** The amount of token.

Returns **[boolean][2]** `true` or `false`.

## approve

Check allowance.

### Parameters

-   `spender` **Address** The spender address.
-   `sender` **Address** The sender address.
-   `amount` **BaseAmount** The amount of token. By default, it will be unlimited token allowance. (optional)

Returns **TransactionResponse** The transaction result.

## transfer

Transfer ETH.

### Parameters

-   `$0` **[Object][4]** 
    -   `$0.asset`  
    -   `$0.memo`  
    -   `$0.amount`  
    -   `$0.recipient`  
    -   `$0.feeOptionKey`  
    -   `$0.gasPrice`  
    -   `$0.gasLimit`  
-   `params` **TxParams** The transfer options.
-   `FeeOptionKey` **feeOptionKey** Fee option (optional)
-   `BaseAmount` **gasPrice** Gas price (optional)
-   `BigNumber` **gasLimit** Gas limit (optional)A given `feeOptionKey` wins over `gasPrice` and `gasLimit`


-   Throws **`"Invalid asset address"`** Thrown if the given asset is invalid.

Returns **TxHash** The transaction hash.

## estimateGasPrices

-   **See: [https://etherscan.io/apis#gastracker][5]
    **

Estimate gas price.

-   Throws **`"Failed to estimate gas price"`** Thrown if failed to estimate gas price.

Returns **GasPrices** The gas prices (average, fast, fastest) in `Wei` (`BaseAmount`)

## estimateGasLimit

Estimate gas.

### Parameters

-   `params` **EstimateGasOpts** The transaction options.
    -   `params.asset`  
    -   `params.recipient`  
    -   `params.amount`  
    -   `params.gasPrice`  


-   Throws **`"Failed to estimate gas limit"`** Thrown if failed to estimate gas limit.

Returns **BaseAmount** The estimated gas fee.

## estimateGasLimits

Estimate gas limits (average, fast fastest).

### Parameters

-   `params` **GasLimitsParams** 

Returns **GasLimits** The estimated gas limits.

## estimateFeesWithGasPricesAndLimits

Estimate gas prices/limits (average, fast fastest).

### Parameters

-   `params` **FeesParams** 


-   Throws **`"Failed to estimate fees, gas price, gas limit"`** Thrown if failed to estimate fees, gas price, gas limit.

Returns **FeesWithGasPricesAndLimits** The estimated gas prices/limits.

## getFees

Get fees.

### Parameters

-   `params` **FeesParams** 


-   Throws **`"Failed to get fees"`** Thrown if failed to get fees.

Returns **Fees** The average/fast/fastest fees.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[5]: https://etherscan.io/apis#gastracker
