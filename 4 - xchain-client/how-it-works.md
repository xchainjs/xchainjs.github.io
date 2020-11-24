---
sort: 1
---

# How it works

## Configuration
Initialise and set up the client to connect to its necessary third-party services to fulfil basic functionality. The third-party services used must be at a minimum to fulfil the wallet functionality, such as displaying balances and sending transactions. 

During configuration, the following can be passed in:
* Network choice (default is MAINNET)
* Phrase (mandatory)
* Service Keys (optional, if null, client will use config defaults or free service limits.)

## Querying
Querying the client for balances and transaction history. Transaction history is optional. 

Optional blockchain-specific queries can be added here, such as Binance Chain market information.

## Transactions
Making transfers.

Optional blockchain-specific transactions can be added here, such as Binance Chain freeze/unfreeze.
