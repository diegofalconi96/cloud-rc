const Vaccines = require('../../models/Vaccines');
const {
  BadImplementation,
  Response,
  BadRequest,
} = require('../../../helpers/response');
const { vaccinesNotFound } = require('./../../../helpers/errorCodes');

async function softDelete(req, res) {
  try {
    const result = await Vaccines.getById(req.params.id);
    if (!result) {
      return BadRequest(vaccinesNotFound, res);
    }
    const data = await Vaccines.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
