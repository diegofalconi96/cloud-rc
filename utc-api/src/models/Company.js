const { Model } = require('objection');
const { defaultFields, softDelete } = require('../../helpers/defaultFields');

class Company extends Model {
  static get tableName() {
    return 'companies';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['company_code', 'company_name'],
      properties: {
        id: {
          type: 'integer',
        },
        company_code: {
          type: 'string',
        },
        company_name: {
          type: 'string',
        },
        responsible: {
          type: 'string',
        },
        dni: {
          type: 'string',
        },
        contact: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        parish: {
          type: 'string',
        },
        quarter: {
          type: 'string',
        },
        neighborhood: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        coordinates: {
          type: 'string',
        },
        code_address: {
          type: 'string',
        },
        surface: {
          type: 'number',
        },
        fertility_percentage: {
          type: 'number',
        },
        birth_rate: {
          type: 'number',
        },
        mortality_rate: {
          type: 'number',
        },
        weaning_percentage: {
          type: 'number',
        },
        liters_of_milk: {
          type: 'number',
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
      'company_code',
      'company_name',
      'responsible',
      'dni',
      'contact',
      'email',
      'city',
      'parish',
      'quarter',
      'neighborhood',
      'address',
      'coordinates',
      'code_address',
      'surface',
      'fertility_percentage',
      'birth_rate',
      'mortality_rate',
      'weaning_percentage',
      'liters_of_milk',
      'observation',
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

module.exports = Company;
