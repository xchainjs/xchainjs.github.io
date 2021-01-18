# Client

Custom Binance client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.phrase`  

## getClientUrl

Get the client url.

Returns **[string][1]** The client url for binance chain based on the network.

## getExplorerUrl

Get the explorer url.

Returns **[string][1]** The explorer url based on the network.

## getExplorerAddressUrl

Get the explorer url for the given address.

### Parameters

-   `address` **Address** 

Returns **[string][1]** The explorer url for the given address based on the network.

## getExplorerTxUrl

Get the explorer url for the given transaction id.

### Parameters

-   `txID` **[string][1]** 

Returns **[string][1]** The explorer url for the given transaction id based on the network.

## setPhrase

Set/update a new phrase

### Parameters

-   `phrase` **[string][1]** A new phrase.


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## getAddress

Get the current address.

-   Throws **[Error][2]** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][3]** `true` or `false`

## getBalance

Get the balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `asset` **Asset** If not set, it will return all assets available. (optional)

Returns **[Array][4]&lt;Balance>** The balance of the address.

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

## multiSend

Broadcast multi-send transaction.

### Parameters

-   `params` **MultiSendParams** The multi-send transfer options.
    -   `params.address`  
    -   `params.transactions`  
    -   `params.memo`   (optional, default `''`)

Returns **TxHash** The transaction hash.

## transfer

Transfer balances.

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.asset`  
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  

Returns **TxHash** The transaction hash.

## getTransferFee

Get the current transfer fee.

Returns **TransferFee** The current transfer fee.

## getFees

Get the current fee.

Returns **Fees** The current fee.

## getMultiSendFees

Get the current fee for multi-send transaction.

Returns **Fees** The current fee for multi-send transaction.

## getSingleAndMultiFees

Get the current fee for both single and multi-send transaction.

Returns **SingleAndMultiFees** The current fee for both single and multi-send transaction.

## purgeClient

Purge client.

Returns **void** 

## getBncClient

Get the BncClient interface.

Returns **BncClient** The BncClient from `@binance-chain/javascript-sdk`.

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** `mainnet` or `testnet`.


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
