const Origin = require('../../models/Origin');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function softDelete(req, res) {
  try {
    const data = await Origin.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
