# Client

Custom Polkadot client

## Parameters

-   `params` **XChainClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.phrase`  

## purgeClient

Purge client.

Returns **void** 

## getClientUrl

Get the client url.

Returns **[string][1]** The client url based on the network.

## getWsEndpoint

Get the client WebSocket url.

Returns **[string][1]** The client WebSocket url based on the network.

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

-   `txID` **[string][1]** The transaction id

Returns **[string][1]** The explorer url for the given transaction id based on the network.

## getSS58Format

Get the SS58 format to be used for Polkadot Keyring.

Returns **[number][2]** The SS58 format based on the network.

## setPhrase

Set/update a new phrase.

### Parameters

-   `phrase` **[string][1]** A new phrase.


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## validateAddress

-   **See: [https://polkadot.js.org/docs/util-crypto/examples/validate-address][3]
    **

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][4]** `true` or `false`

## getAddress

Get the current address.

Generates a network-specific key-pair by first converting the buffer to a Wallet-Import-Format (WIF)
The address is then decoded into type P2WPKH and returned.

-   Throws **`"Address not defined"`** Thrown if failed creating account from phrase.

Returns **Address** The current address.

## getBalance

Get the DOT balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)
-   `asset`  

Returns **[Array][5]&lt;Balance>** The DOT balance of the address.

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

Transfer DOT.

### Parameters

-   `params` **TxParams** The transfer options.

Returns **TxHash** The transaction hash.

## estimateFees

-   **See: [https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-estimate-the-transaction-fees][6]
    **

Get the current fee with transfer options.

### Parameters

-   `params` **TxParams** The transfer options.

Returns **Fees** The estimated fees with the transfer options.

## getFees

Get the current fee.

Returns **Fees** The current fee.

## setNetwork

Set/update the current network.

### Parameters

-   `network` **Network** `mainnet` or `testnet`.


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **XChainClient** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[3]: https://polkadot.js.org/docs/util-crypto/examples/validate-address

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-estimate-the-transaction-fees
