# Client

**Extends xchain_client_1.UTXOClient**

Custom Bitcoin Cash client

## Parameters

-   `params` **BitcoinCashClientParams** 
    -   `params.network`   (optional, default `xchain_client_1.Network.Mainnet`)
    -   `params.feeBounds`   (optional, default `{lower:const_1.LOWER_FEE_BOUND,upper:const_1.UPPER_FEE_BOUND}`)
    -   `params.haskoinUrl`   (optional, default `{[xchain_client_1.Network.Testnet]:'https://haskoin.ninerealms.com/bchtest',[xchain_client_1.Network.Mainnet]:'https://haskoin.ninerealms.com/bch',[xchain_client_1.Network.Stagenet]:'https://haskoin.ninerealms.com/bch'}`)
    -   `params.phrase`  
    -   `params.rootDerivationPaths`   (optional, default ``{[xchain_client_1.Network.Mainnet]:`m/44'/145'/0'/0/`,[xchain_client_1.Network.Testnet]:`m/44'/1'/0'/0/`,[xchain_client_1.Network.Stagenet]:`m/44'/145'/0'/0/`}``)

## setHaskoinURL

Set/Update the haskoin url.

### Parameters

-   `url` **[string][1]** The new haskoin url.

Returns **void** 

## getHaskoinURL

Get the haskoin url.

Returns **[string][1]** The haskoin url based on the current network.

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

### Parameters

-   `index`   (optional, default `0`)


-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before.
-   Throws **`"Address not defined"`** Thrown if failed creating account from phrase.

Returns **Address** The current address.

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][2]** `true` or `false`

## getBalance

Get the BCH balance of a given address.

### Parameters

-   `address` **Address** By default, it will return the balance of the current wallet. (optional)


-   Throws **`"Invalid address"`** Thrown if the given address is an invalid address.

Returns **[Array][3]&lt;Balance>** The BCH balance of the address.

## getTransactions

Get transaction history of a given address with pagination options.
By default it will return the transaction history of the current wallet.

### Parameters

-   `params` **TxHistoryParams** The options to get transaction history. (optional)
    -   `params.address`  
    -   `params.offset`  
    -   `params.limit`  


-   Throws **`"Invalid address"`** Thrown if the given address is an invalid address.

Returns **TxsPage** The transaction history.

## getTransactionData

Get the transaction details of a given transaction id.

### Parameters

-   `txId` **[string][1]** The transaction id.


-   Throws **`"Invalid TxID"`** Thrown if the given transaction id is an invalid one.

Returns **Tx** The transaction details of the given transaction id.

## transfer

Transfer BCH.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.

Returns **TxHash** The transaction hash.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
