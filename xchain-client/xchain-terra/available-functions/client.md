# Client

**Extends xchain_client_1.BaseXChainClient**

Terra Client

## Parameters

-   `$0` **[Object][1]** 
    -   `$0.network`   (optional, default `xchain_client_1.Network.Testnet`)
    -   `$0.phrase`  
    -   `$0.rootDerivationPaths`   (optional, default `util_1.getDefaultRootDerivationPaths()`)
    -   `$0.explorerURL`  
    -   `$0.explorerAddressURL`  
    -   `$0.explorerTxURL`  
    -   `$0.cosmosAPIURL`  
    -   `$0.chainID`  

## getEstimatedFee

Get estimated fee.

### Parameters

-   `params`  
-   `feeAsset` **Asset** Asset to pay fees
-   `options` **CreateTxOptions** Options to create a simulated tx to estimate fees

Returns **EstimatedFee** Estimated fee

## getFees

Get fees.

### Parameters

-   `params`  
-   `Fee` **FeeParams** params (required - they are defined as optional function parameters to fit XChainClient interface only

Returns **Fees** The average/fast/fastest fees.

## transfer

Transfer

Note: For paying fees in other than given `asset` (which is used for paying fee by default),
`feeAsset`, `feeAmount`, `gasLimit` parameter are required.
to get all needed data for these three parameters ^,
use `getEstimatedFee` helper from `utils`.

By passing just `feeAsset` (but not `feeAmount` and `gasLimit`), `feeAmount` and `gasLimit` will be calcaluated internally in `transfer` method.

### Parameters

-   `$0` **[Object][1]** 
    -   `$0.walletIndex`   (optional, default `0`)
    -   `$0.asset`   (optional, default `const_1.AssetLUNA`)
    -   `$0.amount`  
    -   `$0.recipient`  
    -   `$0.memo`  
    -   `$0.feeAsset`  
    -   `$0.feeAmount`  
    -   `$0.gasLimit`  

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
