exports = module.exports = function(unseal) {
  var iron = require('tokens-iron');
  
  
  return {
    parse: iron.parse,
    seal: iron.seal,
    unseal: unseal
  };
};

//exports['@implements'] = 'http://i.bixbyjs.org/tokens/Token';
exports['@implements'] = 'http://i.bixbyjs.org/security/tokens/Format';
exports['@type'] = 'application/fe26.2';
exports['@require'] = [
  './unseal'
];
