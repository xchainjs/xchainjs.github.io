---
sort: 1
---

# How it works

Mayachain Midgard-query module use Midgard Api's to query [Midgard API].

Midgard is a layer 2 REST API that provides *front-end consumers with semi real-time* rolled up data
and analytics of the Mayachain network. Most requests to the network will come through Midgard. This
daemon is here to keep the chain itself from fielding large quantities of requests. You can think of
it as a “read-only slave” to the chain. This keeps the resources of the network focused on
processing transactions.

## Dependencies

* [`@xchainjs/xchain-client`](http://docs.xchainjs.org/xchain-client/interface.html)
* [`@xchainjs/xchain-util`](http://docs.xchainjs.org/xchain-util/how-to-use.html)
* [`@xchainjs/xchain-mayamidgard`](http://docs.xchainjs.org/xchain-mayamidgard-query/how-to-use.html)

[Mayachain Midgard API]: https://gitlab.com/thorchain/midgard/-/tree/develop?ref_type=heads