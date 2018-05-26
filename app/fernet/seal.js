exports = module.exports = function(credentials) {
  // Load modules.
  var fernet = require('tokens-fernet');
  
  // TODO: Pass in other options for Msgpack, YAML, etc payload sz
  // https://github.com/heroku/kombu-fernet-serializers/blob/master/kombu_fernet/serializers/json.py
  
  return fernet.seal(credentials.get.bind(credentials));
};

exports['@require'] = [
  'http://i.bixbyjs.org/security/CredentialsStore'
];
