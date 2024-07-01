const Company = require('../../models/Company');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function patch(req, res) {
  try {
    const data = await Company.update(req.body, req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { patch };
