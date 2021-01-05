# Client

Custom Thorchain Client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.phrase`  
    -   `params.clientUrl`  

## purgeClient

Purge client.

Returns **void** 

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** `mainnet` or `testnet`.


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

## setClientUrl

Set/update the client URL.

### Parameters

-   `clientUrl` **ClientUrl** The client url to be set.

Returns **void** 

## getClientUrl

Get the client url.

Returns **[string][1]** The client url for thorchain based on the current network.

## getDefaultClientUrl

Get the client url.

Returns **ClientUrl** The client url (both mainnet and testnet) for thorchain.

## getClientUrlByNetwork

Get the client url.

### Parameters

-   `network` **Network** 

Returns **[string][1]** The client url for thorchain based on the network.

## getChainId

Get the chain id.

Returns **[string][1]** The chain id based on the network.

## getPrefix

Get current address prefix based on the network.

Returns **Prefix** The prefix based on the network.

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

## deposit

Transaction with MsgNativeTx.

### Parameters

-   `params` **DepositParam** The transaction options.
    -   `params.asset`   (optional, default `types_1.AssetRune`)
    -   `params.amount`  
    -   `params.memo`  

Returns **TxHash** The transaction hash.

## transfer

Transfer balances with MsgSend

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.asset`   (optional, default `types_1.AssetRune`)
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  

Returns **TxHash** The transaction hash.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
