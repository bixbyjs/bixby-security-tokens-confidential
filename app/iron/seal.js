exports = module.exports = function(key) {
  // Load modules.
  var iron = require('tokens-iron');
  
  return iron.unseal(key);
};

exports['@require'] = [ '../common/key' ];
