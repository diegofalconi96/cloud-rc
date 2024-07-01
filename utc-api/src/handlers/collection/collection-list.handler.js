const Collection = require('../../models/Collection');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function getList(req, res) {
  try {
    const filters = req.query;
    const data = await Collection.getAll(filters);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { getList };
