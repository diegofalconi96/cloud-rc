const Company = require('../../models/Company');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function getList(req, res) {
  try {
    const data = await Company.getAll();
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { getList };
