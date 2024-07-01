const { Model } = require('objection');
const { defaultFields, softDelete } = require('../../helpers/defaultFields');

class Breeds extends Model {
  static get tableName() {
    return 'breeds';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: {
          type: 'integer',
        },
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        ...defaultFields,
      },
    };
  }

  static defaultColumns(otherColumns = []) {
    let columns = [
      'id',
      'name',
      'description',
      'sync',
    ].map((c) => `${this.tableName}.${c}`);

    columns = columns.concat(otherColumns);

    return columns;
  }

  static getAll() {
    return this.query()
        .select(this.defaultColumns())
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
}

module.exports = Breeds;
