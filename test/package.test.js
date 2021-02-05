/* global describe, it, expect */

describe('bixby-security-tokens-confidential', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('security/tokens');
      
      expect(json.assembly.components).to.have.length(2);
      expect(json.assembly.components).to.include('fernet/token');
      expect(json.assembly.components).to.include('iron');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
