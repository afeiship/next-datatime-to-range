var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-datetime-to-range');

describe('next/datetimeToRange', function () {

  it('nx.datetimeToRange ["2018-01-12 00:00:00","2018-01-13 23:59:59"]', function () {
    var arr = ["2018-01-12 12:00:23", "2018-01-13 23:01:23"];

    assert.deepEqual(
      ['2018-01-12 00:00:00', '2018-01-13 23:59:59'],
      nx.datetimeToRange(arr)
    );

  });

});
