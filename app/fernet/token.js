exports = module.exports = function(seal, unseal) {
  
  return {
    seal: seal,
    unseal: unseal
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/tokens/Token';
exports['@type'] = 'application/x-fernet-json';
exports['@require'] = [
  './seal',
  './unseal'
];
