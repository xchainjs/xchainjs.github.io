# Client

**Extends xchain_client_1.BaseXChainClient**

Custom Binance client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Mainnet`)
    -   `params.phrase`  
    -   `params.rootDerivationPaths`   (optional, default `{[xchain_client_1.Network.Mainnet]:"44'/931'/0'/0/",[xchain_client_1.Network.Stagenet]:"44'/931'/0'/0/",[xchain_client_1.Network.Testnet]:"44'/931'/0'/0/"}`)

## getBncClient

Get the BncClient interface.

Returns **BncClient** The BncClient from `@binance-chain/javascript-sdk`.

## getNetwork

Gets the current network, and enforces type limited to
'mainnet' and 'testnet', which conflicts with `xchain-client`

Remove this once @binance-chain has stagenet support.

Returns **Network** 

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** 


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

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

## getAddress

### Parameters

-   `index`   (optional, default `0`)

**Meta**

-   **deprecated**: this function eventually will be removed use getAddressAsync instead


## getAddressAsync

Get the current address.

### Parameters

-   `index` **[number][2]** (optional) Account index for the derivation path (optional, default `0`)


-   Throws **[Error][3]** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][4]** `true` or `false`

## getAssetInfo

Returns **any** asset info

## getAccount

Get account data of wallets or by given address.

### Parameters

-   `address` **Address** (optional) By default, it will return account data of current wallet.
-   `index` **[number][2]** (optional) Account index for the derivation path (optional, default `0`)

Returns **Account** account details of given address.

## getBalance

Get the balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `assets`  
-   `asset` **Asset** If not set, it will return all assets available. (optional)

Returns **[Array][5]&lt;Balance>** The balance of the address.

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
    -   `params.walletIndex`   (optional, default `0`)
    -   `params.transactions`  
    -   `params.memo`   (optional, default `''`)

Returns **TxHash** The transaction hash.

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

## prepareTx

Prepare transfer.

### Parameters

-   `params` **TxParams&Address** The transfer options.

Returns **PreparedTx** The unsigned transaction data.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
