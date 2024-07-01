const { Model } = require('objection');
const {
  defaultFields,
  softDelete,
  softDeleteByUuid,
} = require('../../helpers/defaultFields');

class Vaccines extends Model {
  static get tableName() {
    return 'vaccines';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['date'],
      properties: {
        id: {
          type: 'integer',
        },
        date: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        cattle_id: {
          type: 'integer',
        },
        observation: {
          type: 'string',
        },
        ...defaultFields,
      },
    };
  }

  static defaultColumns(otherColumns = []) {
    let columns = [
      'id',
      'date',
      'name',
      'cattle_id',
      'observation',
      'uuid',
      'sync',
    ].map((c) => `${this.tableName}.${c}`);

    columns = columns.concat(otherColumns);

    return columns;
  }

  static getAll(filter = {}) {
    return this.query()
        .select(this.defaultColumns())
        .skipUndefined()
        .where(`${this.tableName}.company_id`, filter.companyId)
        .whereNull(`${this.tableName}.deleted_at`);
  }

  static getById(id) {
    return this.query()
        .select(this.defaultColumns())
        .findById(id).first()
        .whereNull(`${this.tableName}.deleted_at`);
  }

  static insert(data) {
    return this.query()
        .insert(data);
  }

  static update(data, id) {
    return this.query()
        .findById(id)
        .patch(data);
  }

  static delete(id) {
    return softDelete(this.query(), id);
  }

  static deleteByUuid(uuid) {
    return softDeleteByUuid(this.query(), uuid);
  }
}

module.exports = Vaccines;
