# Client

**Extends xchain_client_1.BaseXChainClient**

Generic implementation of the XChainClient interface chains built with cosmos-sdk ([https://docs.cosmos.network/][1]) using the dependencies of the official @cosmjs monorepo.

## Parameters

-   `params` **CosmosSdkClientParams** client configuration (prefix, decimal, fees, urls...)

## getFees

This function returns the fee object in a generalised way for a simple transfer function. In this case this funcion use the default fee
defined in the constructor.

Returns **Fees** fees estimation for average, fast and fastests scenarios.

## getAddress

Get an address derived from the phrase defined in the constructor.

### Parameters

-   `walletIndex` **([number][2] \| [undefined][3])** derivation path index of address that will be generated

Returns **[string][4]** user address at index defined on walletIndex

## validateAddress

Validate the address format.

### Parameters

-   `address` **[string][4]** address to be validated

Returns **[boolean][5]** represents whether the address is valid or invalid

## getBalance

Obtains all the balances of the address passed as parameter for all the assets of the network. For the moment for this client the assets parameter is ignored.
Do not hesitate to open a PR if you need it and it is not yet available.

### Parameters

-   `address` **[string][4]** address to be validated
-   `_assets` **([Array][6]&lt;Asset> \| [undefined][3])** IGNORED FOR THIS IMPLEMENTATION

Returns **[Array][6]&lt;Balance>** array of balances

## getTransactions

Get transactions filtered using params

### Parameters

-   `params` **(TxHistoryParams \| [undefined][3])** Only param address IS SUPPORTED FOR THIS CLIENT, new feature will be added in the future

Returns **TxsPage** array of balances

## getTransactionData

Get transaction info using txId

### Parameters

-   `txId` **[string][4]** Idetifier of transaction
-   `_assetAddress`  

Returns **Tx** Transaction data

[1]: https://docs.cosmos.network/

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
