const Diagnosis = require('../../models/Diagnosis');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function getById(req, res) {
  try {
    const data = await Diagnosis.getById(req.params.id);
    return Response(data || {}, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { getById };
