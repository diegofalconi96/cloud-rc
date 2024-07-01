const Breeds = require('../../models/Breeds');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function patch(req, res) {
  try {
    const data = await Breeds.update(req.body, req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { patch };
