const { encrypt } = require('./../../../helpers/crypter');
const User = require('../../models/User');
const {
  BadImplementation,
  Created,
} = require('../../../helpers/response');

async function insert(req, res) {
  try {
    const record = { ...req.body };
    record.password = encrypt(req.body.password);
    const data = await User.insert(record);
    delete data.password;
    return Created(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { insert };
