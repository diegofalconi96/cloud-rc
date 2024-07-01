const { getList } = require('../handlers/weight/weight-list.handler');
const { getById } = require('../handlers/weight/weight-detail.handler');
const { insert } = require('../handlers/weight/weight-insert.handler');
const { patch } = require('../handlers/weight/weight-update.handler');
const {
  softDelete,
} = require('../handlers/weight/weight-delete.handler');
const Joi = require('joi');
const {
  BadRequest,
} = require('../../helpers/response');

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
    date: Joi.string()
        .allow(null, ''),
    weight: Joi.number()
        .allow(null, '')
        .default(0),
    cattle_id: Joi.number()
        .required(),
    observation: Joi.string()
        .allow(null, ''),
    company_id: Joi.number()
        .required(),
    uuid: Joi.string()
        .allow(null, ''),
    sync: Joi.boolean()
        .allow(null, '')
        .default(true),
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
    date: Joi.string()
        .allow(null, ''),
    weight: Joi.number()
        .allow(null, '')
        .default(0),
    cattle_id: Joi.number()
        .allow(null, ''),
    observation: Joi.string()
        .allow(null, ''),
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
  getAll,
  detail,
  create,
  update,
  del,
};
