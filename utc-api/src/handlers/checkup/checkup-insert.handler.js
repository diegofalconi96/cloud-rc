const Checkup = require('../../models/Checkup');
const {
  BadImplementation,
  Created,
} = require('../../../helpers/response');

async function insert(req, res) {
  try {
    const data = await Checkup.insert(req.body);
    return Created(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { insert };
