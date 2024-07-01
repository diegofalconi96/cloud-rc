const Company = require('../../models/Company');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function softDelete(req, res) {
  try {
    const data = await Company.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
