const { Model } = require('objection');
const {
  defaultFields,
  softDelete,
  softDeleteByUuid,
} = require('../../helpers/defaultFields');
const Diagnosis = require('./Diagnosis');

class Collection extends Model {
  static get tableName() {
    return 'collection';
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
        litres: {
          type: 'number',
        },
        illness: {
          type: 'integer',
        },
        density: {
          type: 'number',
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

  static get relationMappings() {
    return {
      diagnosis: {
        relation: Model.HasOneRelation,
        modelClass: Diagnosis,
        join: {
          from: `${this.tableName}.illness`,
          to: 'diagnosis.id',
        },
      },
    };
  }

  static defaultColumns(otherColumns = []) {
    let columns = [
      'id',
      'date',
      'litres',
      'illness',
      'density',
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
        .whereNull(`${this.tableName}.deleted_at`)
        .withGraphJoined('diagnosis');
  }

  static getById(id) {
    return this.query()
        .select(this.defaultColumns())
        .findById(id).first()
        .whereNull(`${this.tableName}.deleted_at`)
        .withGraphJoined('diagnosis');
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

module.exports = Collection;
