# Cached Value

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## CachedValue

Utility class for caching stable data

### Parameters

-   `refreshData`  function that refresh and return the data
-   `cacheMaxAge` **([number][1] \| [undefined][2])** time in millisecond to expire cache

### getValue

Returns cached data if valid or request fresh data if cache is invalid

#### Parameters

-   `params`  use this params to request data if cache is expired

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined
