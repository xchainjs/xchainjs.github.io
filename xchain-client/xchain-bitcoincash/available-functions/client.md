# Client

**Extends xchain_client_1.UTXOClient**

Custom Bitcoin Cash client

## Parameters

-   `params` **UtxoClientParams**  (optional, default `exports.defaultBchParams`)

## getAddress

### Parameters

-   `index`   (optional, default `0`)

**Meta**

-   **deprecated**: this function eventually will be removed use getAddressAsync instead


## getAddressAsync

Get the current address.

Generates a network-specific key-pair by first converting the buffer to a Wallet-Import-Format (WIF)
The address is then decoded into type P2WPKH and returned.

### Parameters

-   `index`   (optional, default `0`)


-   Throws **`"Phrase must be provided"`** Thrown if phrase has not been set before.
-   Throws **`"Address not defined"`** Thrown if failed creating account from phrase.

Returns **Address** The current address.

## getAssetInfo

Returns **any** BCH asset info

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][1]** `true` or `false`

## transfer

Transfer BCH.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.

Returns **TxHash** The transaction hash.

## buildTx

### Parameters

-   `params` **BuildParams** The transaction build options.
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.memo`  
    -   `params.feeRate`  
    -   `params.sender`  

Returns **Transaction** 

**Meta**

-   **deprecated**: This is deprecated.


## prepareTx

Prepare transfer.

### Parameters

-   `params` **TxParams&Address&FeeRate** The transfer options.
    -   `params.sender`  
    -   `params.memo`  
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.feeRate`  

Returns **PreparedTx** The raw unsigned transaction.

## compileMemo

Compile memo.

### Parameters

-   `memo` **[string][2]** The memo to be compiled.

Returns **[Buffer][3]** The compiled memo.

## getFeeFromUtxos

Get the transaction fee.

### Parameters

-   `inputs` **[Array][4]&lt;UTXO>** The UTXOs.
-   `feeRate` **FeeRate** The fee rate.
-   `data` **[Buffer][3]** The compiled memo (Optional). (optional, default `null`)

Returns **[number][5]** The fee amount.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://nodejs.org/api/buffer.html

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
