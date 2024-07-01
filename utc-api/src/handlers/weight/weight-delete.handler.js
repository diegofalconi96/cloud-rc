const Weight = require('../../models/Weight');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');
const { weightNotFound } = require('./../../../helpers/errorCodes');

async function softDelete(req, res) {
  try {
    const result = await Weight.getById(req.params.id);
    if (!result) {
      return BadRequest(weightNotFound, res);
    }
    const data = await Weight.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
