const User = require('../../models/User');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function getById(req, res) {
  try {
    const data = await User.getById(req.params.id);
    return Response(data || {}, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { getById };
