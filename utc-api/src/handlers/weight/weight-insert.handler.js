const Weight = require('../../models/Weight');
const {
  BadImplementation,
  Created,
} = require('../../../helpers/response');

async function insert(req, res) {
  try {
    const data = await Weight.insert(req.body);
    return Created(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { insert };
