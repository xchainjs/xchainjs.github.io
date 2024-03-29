# Utils

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## bchNetwork

Get BCH network to be used with bitcore-lib.

### Parameters

-   `network` **Network** 

## getPrefix

BCH new addresses strategy has no any prefixes.
Any possible prefixes at the TX addresses will be stripped out with parseTransaction
\*

## stripPrefix

Strips bchtest or bitcoincash prefix from address

### Parameters

-   `address` **Address** 

Returns **Address** The address with prefix removed

## toLegacyAddress

Convert to Legacy Address.

### Parameters

-   `address` **Address** 

Returns **Address** Legacy address.

## toCashAddress

Convert to Cash Address.

### Parameters

-   `address` **Address** 

Returns **Address** Cash address.

## isCashAddress

Checks whether address is Cash Address

### Parameters

-   `address` **Address** 

Returns **[boolean][1]** Is cash address.

## parseTransaction

Parse transaction.

### Parameters

-   `tx` **Transaction** 

Returns **Tx** Parsed transaction.\*

## toBCHAddressNetwork

Converts `Network` to `bchaddr.Network`

### Parameters

-   `network` **Network** 

Returns **[string][2]** bchaddr network

## validateAddress

Validate the BCH address.

### Parameters

-   `address` **[string][2]** 
-   `network` **Network** 

Returns **[boolean][1]** `true` or `false`.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
