const { encrypt } = require('./../../../helpers/crypter');
const User = require('../../models/User');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function patch(req, res) {
  try {
    const record = { ...req.body };
    if (req.body.password) {
      record.password = encrypt(req.body.password);
    }
    const data = await User.update(record, req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { patch };
