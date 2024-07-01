const Joi = require('joi');
const {
  BadRequest,
} = require('../../helpers/response');
const { userAuth } = require('../handlers/user/user-auth.handler');
const { getList } = require('../handlers/user/user-list.handler');
const { getById } = require('../handlers/user/user-detail.handler');
const { insert } = require('../handlers/user/user-insert.handler');
const { patch } = require('../handlers/user/user-update.handler');
const {
  softDelete,
} = require('../handlers/user/user-delete.handler');

const authUser = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const {error, value} = schema.validate(req.body);

  if (error) {
    return BadRequest(error.details[0].message, res);
  }

  return await userAuth(value, res);
};

const getAll = async (req, res) => {
  return getList(req, res);
};

const detail = async (req, res) => {
  const paramsError = Joi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .required(),
  },
  ).validate(
      req.params,
  ).error;
  if (paramsError) {
    return BadRequest(paramsError.details[0].message, res);
  }

  return getById(req, res);
};

const create = async (req, res) => {
  const bodyError = Joi.object({
    name: Joi.string()
        .required(),
    last_name: Joi.string()
        .allow(null),
    email: Joi.string()
        .allow(null),
    dni: Joi.string()
        .allow(null),
    role: Joi.string()
        .required(),
    company_id: Joi.number()
        .integer()
        .min(1)
        .required(),
    username: Joi.string()
        .required(),
    password: Joi.string()
        .required(),
  },
  ).validate(
      req.body,
  ).error;

  if (bodyError) {
    return BadRequest(bodyError.details[0].message, res);
  }
  return insert(req, res);
};

const update = async (req, res) => {
  const paramsError = Joi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .required(),
  },
  ).validate(
      req.params,
  ).error;
  if (paramsError) {
    return BadRequest(paramsError.details[0].message, res);
  }

  const bodyError = Joi.object({
    name: Joi.string()
        .required(),
    last_name: Joi.string()
        .allow(null),
    email: Joi.string()
        .allow(null),
    dni: Joi.string()
        .allow(null),
    role: Joi.string()
        .allow(null),
    username: Joi.string()
        .allow(null),
    password: Joi.string()
        .allow(null),
  },
  ).validate(
      req.body,
  ).error;

  if (bodyError) {
    return BadRequest(bodyError.details[0].message, res);
  }

  return patch(req, res);
};

const del = async (req, res) => {
  const paramsError = Joi.object({
    id: Joi.number()
        .integer()
        .min(1)
        .required(),
  },
  ).validate(
      req.params,
  ).error;
  if (paramsError) {
    return BadRequest(paramsError.details[0].message, res);
  }

  return softDelete(req, res);
};

module.exports = {
  authUser,
  getAll,
  detail,
  create,
  update,
  del,
};
