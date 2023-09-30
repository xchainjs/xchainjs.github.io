---
sort: 1
---

# How it works

Thorchain-query module use `xchain-midgard-query` and thornode Api's to query thorchain for estimation of swaps. 
Function returns a TxDetail object with all the required information needed to conduct a swap.

The dependency between `xchain-midgard-query` and this package is residual and we plan to remove it completely in future releases. 

## Dependencies

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)
* [`@xchainjs/xchain-midgard-query`](http://docs.xchainjs.org/xchain-midgard-query/how-to-use.html)
* [`@xchainjs/xchain-thornode`](http://docs.xchainjs.org/xchain-thornode/how-to-use.html)
