# Client

**Extends xchain_client_1.UTXOClient**

Custom Bitcoin client

## Parameters

-   `params` **UtxoClientParams**  (optional, default `exports.defaultBTCParams`)

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

Returns **any** BTC asset info

## validateAddress

Validate the given address.

### Parameters

-   `address` **Address** 

Returns **[boolean][1]** `true` or `false`

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

## transfer

Transfer BTC.

### Parameters

-   `params` **TxParams&FeeRate** The transfer options.


-   Throws **`"memo too long"`** Thrown if memo longer than  80 chars.

Returns **TxHash** The transaction hash.

## buildTx

### Parameters

-   `param0` **[Object][6]** 
    -   `param0.amount`  
    -   `param0.recipient`  
    -   `param0.memo`  
    -   `param0.feeRate`  
    -   `param0.sender`  
    -   `param0.spendPendingUTXO`   (optional, default `true`)

**Meta**

-   **deprecated**: This is deprecated.


## prepareTx

Prepare transfer.

### Parameters

-   `params` **TxParams&Address&FeeRate&boolean** The transfer options.
    -   `params.sender`  
    -   `params.memo`  
    -   `params.amount`  
    -   `params.recipient`  
    -   `params.spendPendingUTXO`   (optional, default `true`)
    -   `params.feeRate`  

Returns **PreparedTx** The raw unsigned transaction.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://nodejs.org/api/buffer.html

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
