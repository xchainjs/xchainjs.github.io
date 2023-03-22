# Client

**Extends xchain_client_1.UTXOClient**

Custom Dogecoin client

## Parameters

-   `params` **DogecoinClientParams**  (optional, default `exports.defaultDogeParams`)

## buildTx

Build transcation.

### Parameters

-   `params` **BuildParams** The transaction build options.
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.feeRate`  
    -   `params.sender`  

Returns **Transaction** 

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

Transfer Doge.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.

Returns **TxHash** The transaction hash.

## createTxInfo

Create transaction info.

### Parameters

-   `params` **LedgerTxInfoParams** The transaction build options.

Returns **LedgerTxInfo** The transaction info used for ledger sign.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
