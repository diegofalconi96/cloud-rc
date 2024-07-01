const { getList } = require('../handlers/diagnosis/diagnosis-list.handler');
const { getById } = require('../handlers/diagnosis/diagnosis-detail.handler');
const { insert } = require('../handlers/diagnosis/diagnosis-insert.handler');
const { patch } = require('../handlers/diagnosis/diagnosis-update.handler');
const {
  softDelete,
} = require('../handlers/diagnosis/diagnosis-delete.handler');
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
    name: Joi.string()
        .required(),
    description: Joi.string()
        .allow(null),
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
    description: Joi.string()
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
  getAll,
  detail,
  create,
  update,
  del,
};
