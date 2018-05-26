exports = module.exports = function(credentials) {
  // Load modules.
  var iron = require('tokens-iron');
  
  return iron.unseal(credentials.get.bind(credentials));
};

exports['@require'] = [
  'http://i.bixbyjs.org/security/CredentialsStore'
];
