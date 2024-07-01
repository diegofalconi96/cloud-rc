const defaultFields = {
  uuid: {
    type: 'string',
  },
  sync: {
    type: 'boolean',
  },
  company_id: {
    type: 'integer',
  },
  created_at: {
    type: 'string',
  },
  updated_at: {
    type: 'string',
  },
  deleted_at: {
    type: 'string',
  },
};

function softDelete(query, id) {
  return query
      .findById(id)
      .patch({
        deleted_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      });
}

function softDeleteByUuid(query, uuid) {
  return query
      .patch({
        deleted_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      })
      .where('uuid', uuid);
}

module.exports = {
  defaultFields,
  softDelete,
  softDeleteByUuid,
};
