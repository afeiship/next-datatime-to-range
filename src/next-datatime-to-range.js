(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = ' ';
  var START_SUFFIX = ' 00:00:00';
  var END_SUFFIX = ' 00:00:00';

  nx.datatimeToRange = function (inArray) {
    var start = inArray[0];
    var end = inArray[1];
    var result = [];
    if (start && end) {
      start = start.split(BLANK)[0] + START_SUFFIX;
      end = end.split(BLANK)[0] + END_SUFFIX;
      result[0] = start;
      result[1] = end;
    }
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.datatimeToRange;
  }

}());
