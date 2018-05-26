exports = module.exports = function(credentials) {
  // Load modules.
  var fernet = require('tokens-fernet');
  
  return fernet.unseal({ issuer: 'x-me' }, credentials.get.bind(credentials));
};

exports['@require'] = [
  'http://i.bixbyjs.org/security/CredentialsStore'
];
