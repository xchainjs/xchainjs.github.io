# Client

**Extends xchain_client_1.BaseXChainClient**

Custom Cosmos client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Testnet`)
    -   `params.phrase`  
    -   `params.rootDerivationPaths`   (optional, default ``{[xchain_client_1.Network.Mainnet]:`44'/118'/0'/0/`,[xchain_client_1.Network.Testnet]:`44'/118'/0'/0/`,[xchain_client_1.Network.Stagenet]:`44'/118'/0'/0/`}``)

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

## getAddress

Get the current address.

### Parameters

-   `index`   (optional, default `0`)


-   Throws **[Error][2]** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][3]** `true` or `false`

## getMainAsset

Get the main asset based on the network.

Returns **[string][1]** The main asset based on the network.

## getBalance

Get the balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `assets`  
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

## transfer

Transfer balances.

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.walletIndex`  
    -   `params.asset`  
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  

Returns **TxHash** The transaction hash.

## transferOffline

Transfer offline balances.

### Parameters

-   `params` **TxOfflineParams** The transfer offline options.
    -   `params.walletIndex`  
    -   `params.asset`  
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.from_account_number`  
    -   `params.from_sequence`  

Returns **[string][1]** The signed transaction bytes.

## getFees

Get the current fee.

Returns **Fees** The current fee.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
