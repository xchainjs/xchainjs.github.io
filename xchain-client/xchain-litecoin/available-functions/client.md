# Client

Custom Litecoin client

## Parameters

-   `params` **LitecoinClientParams** 
    -   `params.network`   (optional, default `'testnet'`)
    -   `params.nodeUrl`   (optional, default `''`)
    -   `params.phrase`  

## setNodeURL

Set/Update the node url.

### Parameters

-   `url` **[string][1]** The new node url.

Returns **void** 

## setPhrase

Set/update a new phrase.

### Parameters

-   `phrase` **[string][1]** A new phrase.


-   Throws **`"Invalid phrase"`** Thrown if the given phase is invalid.

Returns **Address** The address from the given phrase

## purgeClient

Purge client.

Returns **void** 

## setNetwork

Set/update the current network.

### Parameters

-   `net`  
-   `network` **Network** `mainnet` or `testnet`.


-   Throws **`"Network must be provided"`** Thrown if network has not been set before.

Returns **void** 

## getNetwork

Get the current network.

Returns **Network** The current network. (`mainnet` or `testnet`)

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

## getAddress

Get the current address.

Generates a network-specific key-pair by first converting the buffer to a Wallet-Import-Format (WIF)
The address is then decoded into type P2WPKH and returned.

-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before.
-   Throws **`"Address not defined"`** Thrown if failed creating account from phrase.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][2]** `true` or `false`

## getBalance

Get the LTC balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)

Returns **[Array][3]&lt;Balance>** The LTC balance of the address.

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

## getFeesWithRates

Get the rates and fees.

### Parameters

-   `memo` **[string][1]** The memo to be used for fee calculation (optional)

Returns **FeesWithRates** The fees and rates

## getFees

Get the current fees.

Returns **Fees** The fees without memo

## getFeesWithMemo

Get the fees for transactions with memo.
If you want to get `Fees` and `FeeRates` at once, use `getFeesAndRates` method

### Parameters

-   `memo` **[string][1]** 

Returns **Fees** The fees with memo

## getFeeRates

Get the fee rates for transactions without a memo.
If you want to get `Fees` and `FeeRates` at once, use `getFeesAndRates` method

Returns **FeeRates** The fee rate

## transfer

Transfer LTC.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.

Returns **TxHash** The transaction hash.

## derivePath

Get DerivePath

Returns **[string][1]** The litecoin derivation path based on the network.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
