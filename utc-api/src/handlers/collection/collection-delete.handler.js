const Collection = require('../../models/Collection');
const {
  BadImplementation,
  Response,
  BadRequest,
} = require('../../../helpers/response');
const { collectionNotFound } = require('./../../../helpers/errorCodes');

async function softDelete(req, res) {
  try {
    const result = await Collection.getById(req.params.id);
    if (!result) {
      return BadRequest(collectionNotFound, res);
    }
    const data = await Collection.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
