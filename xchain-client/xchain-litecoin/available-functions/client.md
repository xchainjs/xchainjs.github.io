# Client

**Extends xchain_client_1.UTXOClient**

Custom Litecoin client

## Parameters

-   `params` **UtxoClientParams**  (optional, default `exports.defaultLTCParams`)

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

Returns **[boolean][1]** `true` or `false`

## transfer

Transfer LTC.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.

Returns **TxHash** The transaction hash.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
