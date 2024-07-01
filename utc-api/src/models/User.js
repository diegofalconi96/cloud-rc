const { Model } = require('objection');
const { defaultFields, softDelete } = require('../../helpers/defaultFields');
const Company = require('./Company');

class User extends Model {
  static get tableName() {
    return 'users';
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
        last_name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        dni: {
          type: 'string',
        },
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
        ...defaultFields,
      },
    };
  }

  static get relationMappings() {
    return {
      company: {
        relation: Model.HasOneRelation,
        modelClass: Company,
        join: {
          from: 'users.company_id',
          to: 'companies.id',
        },
      },
    };
  }

  static defaultColumns(otherColumns = []) {
    let columns = [
      'id',
      'name',
      'last_name',
      'email',
      'dni',
    ].map((c) => `${this.tableName}.${c}`);

    columns = columns.concat(otherColumns);

    return columns;
  }

  static getAll(filter = {}) {
    return this.query()
        .select(this.defaultColumns())
        .whereNull(`${this.tableName}.deleted_at`)
        .skipUndefined()
        .where('username', filter.username)
        .skipUndefined()
        .where('password', filter.password)
        .withGraphJoined('company');
  }

  static getById(id) {
    return this.query()
        .select(this.defaultColumns())
        .findById(id).first()
        .whereNull(`${this.tableName}.deleted_at`)
        .withGraphJoined('company');
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

module.exports = User;
