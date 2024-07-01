const { getList } = require('../handlers/cattle/cattle-list.handler');
const { getById } = require('../handlers/cattle/cattle-detail.handler');
const { insert } = require('../handlers/cattle/cattle-insert.handler');
const { patch } = require('../handlers/cattle/cattle-update.handler');
const {
  softDelete,
} = require('../handlers/cattle/cattle-delete.handler');
const { saveFile } = require('../handlers/cattle/cattle-upload-file');
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
    code: Joi.string()
        .allow(null, ''),
    name: Joi.string()
        .allow(null, ''),
    register: Joi.string()
        .allow(null, ''),
    gender: Joi.number()
        .allow(null, ''),
    category_id: Joi.number()
        .allow(null, ''),
    origin_id: Joi.number()
        .allow(null, ''),
    breed_id: Joi.number()
        .allow(null, ''),
    father_id: Joi.string()
        .allow(null, ''),
    mother_id: Joi.string()
        .allow(null, ''),
    other_breed: Joi.string()
        .allow(null, ''),
    date: Joi.string()
        .allow(null, ''),
    weight: Joi.number()
        .allow(null, ''),
    url_image: Joi.string()
        .allow(null, ''),
    uuid: Joi.string()
        .allow(null, ''),
    sync: Joi.boolean()
        .allow(null, '')
        .default(true),
    company_id: Joi.number()
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
    code: Joi.string()
        .allow(null, ''),
    name: Joi.string()
        .allow(null, ''),
    register: Joi.string()
        .allow(null, ''),
    gender: Joi.number()
        .allow(null, ''),
    category_id: Joi.number()
        .allow(null, ''),
    origin_id: Joi.number()
        .allow(null, ''),
    breed_id: Joi.number()
        .allow(null, ''),
    father_id: Joi.string()
        .allow(null, ''),
    mother_id: Joi.string()
        .allow(null, ''),
    other_breed: Joi.string()
        .allow(null, ''),
    date: Joi.string()
        .allow(null, ''),
    weight: Joi.number()
        .allow(null, ''),
    url_image: Joi.string()
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

const uploadFile = async (req, res) => {
  const bodyError = Joi.object({
    base64: Joi.string()
        .required(),
  },
  ).validate(
      req.body,
  ).error;

  if (bodyError) {
    return BadRequest(bodyError.details[0].message, res);
  }
  return saveFile(req, res);
};

module.exports = {
  getAll,
  detail,
  create,
  update,
  del,
  uploadFile,
};
