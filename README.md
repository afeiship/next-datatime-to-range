# next-datetime-to-range
> Datetime string to range for next

## install:
```bash
npm install -S afeiship/next-datetime-to-range --registry=https://registry.npm.taobao.org
```

## usage:
```js
var arr = [ "2018-01-12 12:00:23", "2018-01-13 23:01:23" ];
var result = nx.datetimeToRange(arr)

// result: [ '2018-01-12 00:00:00', '2018-01-13 23:59:59' ]
```
