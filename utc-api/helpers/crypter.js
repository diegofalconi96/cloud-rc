const crypto = require('crypto');

function encrypt(password) {
  const sha256 = crypto.createHash('sha256');
  sha256.update(password);
  const hashedPassword = sha256.digest('hex');
  return hashedPassword;
}

module.exports = {encrypt};
