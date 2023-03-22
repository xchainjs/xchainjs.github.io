# Client

**Extends xchain_client_1.BaseXChainClient**

Custom Cosmos client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Mainnet`)
    -   `params.phrase`  
    -   `params.clientUrls`   (optional, default `utils_1.getDefaultClientUrls()`)
    -   `params.chainIds`   (optional, default `utils_1.getDefaultChainIds()`)
    -   `params.rootDerivationPaths`   (optional, default `utils_1.getDefaultRootDerivationPaths()`)

## setNetwork

Updates current network.

### Parameters

-   `network` **Network** 

Returns **void** 

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

## getBalance

Get the balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `assets`  
-   `asset` **Asset** If not set, it will return all assets available. (optional)

Returns **[Array][4]&lt;Balance>** The balance of the address.

## getTransactions

Get transaction history of a given address and asset with pagination options.
If `asset` is not set, history will include `ATOM` txs only
By default it will return the transaction history of the current wallet.

### Parameters

-   `params` **TxHistoryParams** The options to get transaction history. (optional)

Returns **TxsPage** The transaction history.

## getTransactionData

Get the transaction details of a given transaction id. Supports `ATOM` txs only.

### Parameters

-   `txId` **[string][1]** The transaction id.

Returns **Tx** The transaction details of the given transaction id.

## transfer

Transfer balances.

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.walletIndex`  
    -   `params.asset`   (optional, default `const_1.AssetATOM`)
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.gasLimit`   (optional, default `new bignumber_js_1.default(const_1.DEFAULT_GAS_LIMIT)`)
    -   `params.feeAmount`   (optional, default `const_1.DEFAULT_FEE`)

Returns **TxHash** The transaction hash.

## transferOffline

Transfer offline balances.

### Parameters

-   `params` **TxOfflineParams** The transfer offline options.
    -   `params.walletIndex`  
    -   `params.asset`   (optional, default `const_1.AssetATOM`)
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.from_account_number`  
    -   `params.from_sequence`  
    -   `params.gasLimit`   (optional, default `new bignumber_js_1.default(const_1.DEFAULT_GAS_LIMIT)`)
    -   `params.feeAmount`   (optional, default `const_1.DEFAULT_FEE`)

Returns **[string][1]** The signed transaction bytes.

## getFees

Returns fees.
It tries to get chain fees from THORChain `inbound_addresses` first
If it fails, it returns DEFAULT fees.

Returns **Fees** Current fees

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
