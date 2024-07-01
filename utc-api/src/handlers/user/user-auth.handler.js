const User = require('../../models/User');
const { encrypt } = require('./../../../helpers/crypter');
const {
  BadImplementation,
  BadRequest,
  Response,
} = require('./../../../helpers/response');
const { wrongUserOrPassword } = require('./../../../helpers/errorCodes');

async function userAuth(req, res) {
  try {
    req.hashPassword = encrypt(req.password);
    const data = await User.getAll({
      username: req.username,
      password: req.hashPassword,
    });
    if (data.length > 0) {
      return Response(data[0], res);
    }
    return BadRequest(wrongUserOrPassword, res);
  } catch (error) {
    console.log(error);
    return BadImplementation(error.message, res);
  }
};

module.exports = { userAuth };
