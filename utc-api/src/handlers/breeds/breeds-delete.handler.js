const Breeds = require('../../models/Breeds');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function softDelete(req, res) {
  try {
    const data = await Breeds.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
