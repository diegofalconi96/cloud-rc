const Checkup = require('../../models/Checkup');
const {
  BadImplementation,
  Response,
  BadRequest,
} = require('../../../helpers/response');
const { checkupNotFound } = require('./../../../helpers/errorCodes');

async function softDelete(req, res) {
  try {
    const result = await Checkup.getById(req.params.id);
    if (!result) {
      return BadRequest(checkupNotFound, res);
    }
    const data = await Checkup.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
