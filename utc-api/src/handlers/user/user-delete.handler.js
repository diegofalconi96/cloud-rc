const User = require('../../models/User');
const {
  BadImplementation,
  Response,
} = require('../../../helpers/response');

async function softDelete(req, res) {
  try {
    const data = await User.delete(req.params.id);
    return Response(data, res);
  } catch (error) {
    return BadImplementation(error.message, res);
  }
}

module.exports = { softDelete };
