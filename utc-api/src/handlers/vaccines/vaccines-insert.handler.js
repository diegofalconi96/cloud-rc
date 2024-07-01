const Vaccines = require('../../models/Vaccines');
const {
  BadImplementation,
  Created,
} = require('../../../helpers/response');

async function insert(req, res) {
  try {
    const data = await Vaccines.insert(req.body);
    return Created(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { insert };
