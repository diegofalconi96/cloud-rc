const Cattle = require('../../models/Cattle');
const {
  BadImplementation,
  BadRequest,
  Response,
} = require('../../../helpers/response');
const { cattleNotFound } = require('./../../../helpers/errorCodes');
const Checkup = require('../../models/Checkup');
const Collection = require('../../models/Collection');
const Vaccines = require('../../models/Vaccines');
const Weight = require('../../models/Weight');


async function softDelete(req, res) {
  try {
    const cattle = await Cattle.getById(req.params.id);
    if (!cattle) {
      return BadRequest(cattleNotFound, res);
    }
    const data = await Cattle.delete(req.params.id);
    if (data === 1) {
      await Checkup.deleteByUuid(cattle.uuid);
      await Collection.deleteByUuid(cattle.uuid);
      await Vaccines.deleteByUuid(cattle.uuid);
      await Weight.deleteByUuid(cattle.uuid);
    }
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
