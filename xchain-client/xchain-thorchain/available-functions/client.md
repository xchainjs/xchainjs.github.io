# Client

**Extends xchain_client_1.BaseXChainClient**

Custom Thorchain Client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Mainnet`)
    -   `params.phrase`  
    -   `params.clientUrl`   (optional, default `{[xchain_client_1.Network.Testnet]:{node:'deprecated',rpc:'deprecated'},[xchain_client_1.Network.Stagenet]:{node:'https://stagenet-thornode.ninerealms.com',rpc:'https://stagenet-rpc.ninerealms.com'},[xchain_client_1.Network.Mainnet]:{node:'https://thornode.ninerealms.com',rpc:'https://rpc.ninerealms.com'}}`)
    -   `params.explorerUrls`   (optional, default `const_1.defaultExplorerUrls`)
    -   `params.rootDerivationPaths`   (optional, default `{[xchain_client_1.Network.Mainnet]:"44'/931'/0'/0/",[xchain_client_1.Network.Stagenet]:"44'/931'/0'/0/",[xchain_client_1.Network.Testnet]:"44'/931'/0'/0/"}`)
    -   `params.chainIds`   (optional, default `{[xchain_client_1.Network.Mainnet]:'thorchain-mainnet-v1',[xchain_client_1.Network.Stagenet]:'thorchain-stagenet-v2',[xchain_client_1.Network.Testnet]:'deprecated'}`)

## getTransactions

Get transaction history of a given address with pagination options.
By default it will return the transaction history of the current wallet.

### Parameters

-   `params` **TxHistoryParams** The options to get transaction history. (optional)

Returns **TxsPage** The transaction history.

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** 


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## setClientUrl

Set/update the client URL.

### Parameters

-   `clientUrl` **ClientUrl** The client url to be set.

Returns **void** 

## getClientUrl

Get the client url.

Returns **NodeUrl** The client url for thorchain based on the current network.

## setExplorerUrls

Set/update the explorer URLs.

### Parameters

-   `urls` **ExplorerUrls** The explorer urls to be set.

Returns **void** 

## getExplorerUrl

Get the explorer url.

Returns **[string][1]** The explorer url for thorchain based on the current network.

## setChainId

Sets chain id

### Parameters

-   `chainId` **ChainId** Chain id to update
-   `network` **Network** (optional) Network for given chainId. If `network`not set, current network of the client is used

Returns **void** 

## getChainId

Gets chain id

### Parameters

-   `network` **Network** (optional) Network to get chain id from. If `network`not set, current network of the client is used

Returns **ChainId** Chain id based on the current network.

## getCosmosClient

Get cosmos client

Returns **CosmosSDKClient** current cosmos client

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

## getPrivateKey

Get private key

### Parameters

-   `index` **[number][2]** the HD wallet index (optional) (optional, default `0`)


-   Throws **`"Phrase not set"`** Throws an error if phrase has not been set before

Returns **PrivKey** The private key generated from the given phrase

## getPubKey

Get public key

### Parameters

-   `index` **[number][2]** the HD wallet index (optional) (optional, default `0`)


-   Throws **`"Phrase not set"`** Throws an error if phrase has not been set before
    \*

Returns **PubKey** The public key generated from the given phrase

## getAddress

Get the current address.

### Parameters

-   `index`   (optional, default `0`)


-   Throws **[Error][3]** Thrown if phrase has not been set before. A phrase is needed to create a wallet and to derive an address from it.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][4]** `true` or `false`

## getBalance

Get the balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `assets`  
-   `asset` **Asset** If not set, it will return all assets available. (optional)

Returns **[Array][5]&lt;Balance>** The balance of the address.

## getTransactionData

Get the transaction details of a given transaction id.

### Parameters

-   `txId` **[string][1]** The transaction id.
-   `address`  

Returns **Tx** The transaction details of the given transaction id.

## getTransactionDataThornode

This function is used when in bound or outbound tx is not of thorchain

### Parameters

-   `txId`  transaction hash

Returns **any** Tx object

## getDepositTransaction

Get the transaction details of a given transaction id. (from /thorchain/txs/hash)

Node: /thorchain/txs/hash response doesn't have timestamp field.

### Parameters

-   `txId` **[string][1]** The transaction id.

Returns **Tx** The transaction details of the given transaction id.

## deposit

Transaction with MsgNativeTx.

### Parameters

-   `params` **DepositParam** The transaction options.
    -   `params.walletIndex`   (optional, default `0`)
    -   `params.asset`   (optional, default `const_1.AssetRuneNative`)
    -   `params.amount`  
    -   `params.memo`  
    -   `params.gasLimit`   (optional, default `new bignumber_js_1.default(const_1.DEPOSIT_GAS_LIMIT_VALUE)`)
    -   `params.sequence`  


-   Throws **`"insufficient funds"`** Thrown if the wallet has insufficient funds.
-   Throws **`"Invalid transaction hash"`** Thrown by missing tx hash

Returns **TxHash** The transaction hash.

## transfer

Transfer balances with MsgSend

### Parameters

-   `params` **TxParams** The transfer options.
    -   `params.walletIndex`   (optional, default `0`)
    -   `params.asset`   (optional, default `const_1.AssetRuneNative`)
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.gasLimit`   (optional, default `new bignumber_js_1.default(const_1.DEFAULT_GAS_LIMIT_VALUE)`)
    -   `params.sequence`  


-   Throws **`"insufficient funds"`** Thrown if the wallet has insufficient funds.
-   Throws **`"Invalid transaction hash"`** Thrown by missing tx hash

Returns **TxHash** The transaction hash.

## transferOffline

Transfer without broadcast balances with MsgSend

### Parameters

-   `params` **TxOfflineParams** The transfer offline options.
    -   `params.walletIndex`   (optional, default `0`)
    -   `params.asset`   (optional, default `const_1.AssetRuneNative`)
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.fromRuneBalance`  
    -   `params.fromAssetBalance`   (optional, default `xchain_util_1.baseAmount(0,const_1.DECIMAL)`)
    -   `params.fromAccountNumber`   (optional, default `long_1.default.ZERO`)
    -   `params.fromSequence`   (optional, default `long_1.default.ZERO`)
    -   `params.gasLimit`   (optional, default `new bignumber_js_1.default(const_1.DEFAULT_GAS_LIMIT_VALUE)`)

Returns **[string][1]** The signed transaction bytes.

## getFees

Gets fees from Node

Returns **Fees** 

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
