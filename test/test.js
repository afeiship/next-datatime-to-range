var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-datatime-to-range');

describe('next/datatimeToRange', function () {

  it('nx.datatimeToRange ["2018-01-12 12:00:23","2018-01-13 23:01:23"]', function () {
    var arr = ["2018-01-12 12:00:23", "2018-01-13 23:01:23"];

    assert.equal(
      ['2018-01-12 00:00:00', '2018-01-13 00:00:00'],
      nx.datatimeToRange(arr)
    );

  });

});
