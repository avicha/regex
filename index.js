// Generated by CoffeeScript 1.4.0
(function() {
  var Regex;

  Regex = {};

  Regex.match = function(regex, str) {
    return str.match(regex);
  };

  Regex.matchAll = function(regex, str) {
    var next, r, res;
    r = new RegExp(regex);
    res = [];
    next = null;
    while ((next = r.exec(str))) {
      if (next.length === 1) {
        res.push(next[0]);
      } else {
        if (next.length === 2) {
          res.push(next[1]);
        } else {
          res.push(next.slice(1));
        }
      }
    }
    return res;
  };

  Regex.contain = function(str, substring) {
    return !!~str.indexOf(substring);
  };

  module.exports = Regex;

}).call(this);
