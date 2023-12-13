# Wallet

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## constructor

Constructor to create a Wallet

### Parameters

-   `phrase` **[string][1]** mnemonic phrase
-   `network` **Network** mnemonic phrase
-   `chainConfigs` **ChainConfigs** Config by chain. If it isn not set, each client uses its default params (optional, default `{}`)

Returns **any** Wallet

## getAddress

Get chain address

### Parameters

-   `chain` **Chain** 

Returns **any** the chain address

## validateAddress

Check if address is valid

### Parameters

-   `chain` **Chain** in which the address has to be valid
-   `address` **[string][1]** to validate

Returns **any** true if it is a valid address, otherwise, false

## transfer

Make a transaction

### Parameters

-   `txParams` **TxParams** to make the transfer
    -   `txParams.asset`  
    -   `txParams.amount`  
    -   `txParams.recipient`  
    -   `txParams.memo`  
    -   `txParams.walletIndex`  

Returns **any** the transaction hash

## deposit

Make a deposit

### Parameters

-   `depositParams` **DepositParam** 
    -   `depositParams.asset`  
    -   `depositParams.amount`  
    -   `depositParams.memo`  


-   Throws **[Error][2]** if can not make deposit with the asset

Returns **any** the hash of the deposit

## isApproved

Check if an spenderAddress is allowed to spend in name of another address certain asset amount

### Parameters

-   `asset` **Asset** to check
-   `amount` **BaseAmount** to check
-   `fromAddress` **[string][1]** owner of the amount asset
-   `spenderAddress` **[string][1]** spender to check if it is allowed to spend


-   Throws **[Error][2]** if asset is a non ERC20 asset

Returns **any** true if the spenderAddress is allowed to spend the amount, otherwise, false

## getExplorerTxUrl

Get transaction url

### Parameters

-   `chain` **Chain** of the transaction
-   `hash` **[string][1]** of the transaction

Returns **any** the transaction url

## getGasFeeRates

Get feeRates

### Parameters

-   `chain` **Chain** of which return the feeRates


-   Throws **[Error][2]** if gas fee rates can not be returned from the chain

Returns **any** the gas fee rates

## getChainWallet

Get chain wallet

### Parameters

-   `chain` **Chain** of which return the wallet


-   Throws **[Error][2]** wallet can not be retrieve from chain

Returns **any** the chain wallet

## getChainClient

Get chain client

### Parameters

-   `chain` **Chain** of which return the client


-   Throws **[Error][2]** if client does not exist

Returns **any** the chain client

## isERC20Asset

Check if asset is ERC20

### Parameters

-   `asset` **Asset** to check

Returns **any** true if asset is ERC20, otherwise, false

## isEVMChain

Check if asset chain is EVM

### Parameters

-   `chain` **Chain** to check

Returns **any** true if chain is EVM, otherwise, false

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error