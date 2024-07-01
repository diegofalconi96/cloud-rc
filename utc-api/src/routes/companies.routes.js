const { getList } = require('../handlers/companies/companies-list.handler');
const { getById } = require('../handlers/companies/companies-detail.handler');
const { insert } = require('../handlers/companies/companies-insert.handler');
const { patch } = require('../handlers/companies/companies-update.handler');
const {
  softDelete,
} = require('../handlers/companies/companies-delete.handler');
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
    company_code: Joi.string()
        .required(),
    company_name: Joi.string()
        .required(),
    responsible: Joi.string()
        .required(),
    dni: Joi.string()
        .allow(null),
    contact: Joi.string()
        .allow(null),
    email: Joi.string()
        .allow(null),
    city: Joi.string()
        .allow(null),
    parish: Joi.string()
        .allow(null),
    quarter: Joi.string()
        .allow(null),
    neighborhood: Joi.string()
        .allow(null),
    address: Joi.string()
        .allow(null),
    coordinates: Joi.string()
        .allow(null),
    code_address: Joi.string()
        .allow(null),
    surface: Joi.number()
        .allow(null),
    fertility_percentage: Joi.number()
        .allow(null),
    birth_rate: Joi.number()
        .allow(null),
    mortality_rate: Joi.number()
        .allow(null),
    weaning_percentage: Joi.number()
        .allow(null),
    liters_of_milk: Joi.number()
        .allow(null),
    observation: Joi.string()
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
    company_code: Joi.string()
        .allow(null),
    company_name: Joi.string()
        .required(),
    responsible: Joi.string()
        .allow(null),
    dni: Joi.string()
        .allow(null),
    contact: Joi.string()
        .allow(null),
    email: Joi.string()
        .allow(null),
    city: Joi.string()
        .allow(null),
    parish: Joi.string()
        .allow(null),
    quarter: Joi.string()
        .allow(null),
    neighborhood: Joi.string()
        .allow(null),
    address: Joi.string()
        .allow(null),
    coordinates: Joi.string()
        .allow(null),
    code_address: Joi.string()
        .allow(null),
    surface: Joi.number()
        .allow(null),
    fertility_percentage: Joi.number()
        .allow(null),
    birth_rate: Joi.number()
        .allow(null),
    mortality_rate: Joi.number()
        .allow(null),
    weaning_percentage: Joi.number()
        .allow(null),
    liters_of_milk: Joi.number()
        .allow(null),
    observation: Joi.string()
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
