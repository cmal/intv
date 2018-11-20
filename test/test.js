var should = require('chai').should();

describe('ipv4->integer', function() {

  var interview = require('../index.js')

  var checkError = function(f, s, err) {
    (function() { f(s) }).should.throw(err);
  }

  describe('#ipv4ToInt()', function() {

    it ('Plain ipv4 string should return', function() {
      ipv4ToInt('255.255.255.255').should.equal(4294967295);
    });

  });
});
