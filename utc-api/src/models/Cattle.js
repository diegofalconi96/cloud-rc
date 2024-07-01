const { Model } = require('objection');
const { defaultFields, softDelete } = require('../../helpers/defaultFields');
const Categories = require('./Categories');
const Breeds = require('./Breeds');
const Origin = require('./Origin');
const Checkup = require('./Checkup');
const Collection = require('./Collection');
const Vaccines = require('./Vaccines');
const Weight = require('./Weight');

class Cattle extends Model {
  static get tableName() {
    return 'cattle';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: {
          type: 'integer',
        },
        code: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        register: {
          type: 'string',
        },
        gender: {
          type: 'integer',
        },
        category_id: {
          type: 'integer',
        },
        origin_id: {
          type: 'integer',
        },
        breed_id: {
          type: 'integer',
        },
        date: {
          type: 'string',
        },
        weight: {
          type: 'number',
        },
        ...defaultFields,
      },
    };
  }

  static get relationMappings() {
    return {
      breed: {
        relation: Model.HasOneRelation,
        modelClass: Breeds,
        join: {
          from: `${this.tableName}.breed_id`,
          to: 'breeds.id',
        },
      },
      category: {
        relation: Model.HasOneRelation,
        modelClass: Categories,
        join: {
          from: `${this.tableName}.category_id`,
          to: 'categories.id',
        },
      },
      origin: {
        relation: Model.HasOneRelation,
        modelClass: Origin,
        join: {
          from: `${this.tableName}.origin_id`,
          to: 'origin.id',
        },
      },
      mother: {
        relation: Model.HasOneRelation,
        modelClass: Cattle,
        join: {
          from: `${this.tableName}.mother_id`,
          to: `${this.tableName}.id`,
        },
      },
      father: {
        relation: Model.HasOneRelation,
        modelClass: Cattle,
        join: {
          from: `${this.tableName}.father_id`,
          to: `${this.tableName}.id`,
        },
      },
      checkup: {
        relation: Model.HasManyRelation,
        modelClass: Checkup,
        join: {
          from: `${this.tableName}.id`,
          to: 'checkup.cattle_id',
        },
      },
      collection: {
        relation: Model.HasManyRelation,
        modelClass: Collection,
        join: {
          from: `${this.tableName}.id`,
          to: 'collection.cattle_id',
        },
      },
      vaccines: {
        relation: Model.HasManyRelation,
        modelClass: Vaccines,
        join: {
          from: `${this.tableName}.id`,
          to: 'vaccines.cattle_id',
        },
      },
      weights: {
        relation: Model.HasManyRelation,
        modelClass: Weight,
        join: {
          from: `${this.tableName}.id`,
          to: 'weight.cattle_id',
        },
      },
    };
  }

  static defaultColumns(otherColumns = []) {
    let columns = [
      'id',
      'code',
      'name',
      'register',
      'category_id',
      'gender',
      'origin_id',
      'breed_id',
      'father_id',
      'mother_id',
      'other_breed',
      'date',
      'weight',
      'url_image',
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
        .withGraphJoined('breed')
        .whereNull(`breed.deleted_at`)
        .withGraphJoined('category')
        .whereNull(`category.deleted_at`)
        .withGraphJoined('father.[breed, category, father, mother, origin]')
        .whereNull(`father.deleted_at`)
        .withGraphJoined('mother.[breed, category, father, mother, origin]')
        .whereNull(`mother.deleted_at`)
        .withGraphJoined('origin')
        .whereNull(`origin.deleted_at`)
        .withGraphJoined('checkup')
        .whereNull(`checkup.deleted_at`)
        .withGraphJoined('collection.diagnosis')
        .whereNull(`collection.deleted_at`)
        .withGraphJoined('vaccines')
        .whereNull(`vaccines.deleted_at`)
        .withGraphJoined('weights')
        .whereNull(`weights.deleted_at`);
  }

  static getById(id) {
    return this.query()
        .select(this.defaultColumns())
        .findById(id).first()
        .whereNull(`${this.tableName}.deleted_at`)
        .withGraphJoined('breed')
        .whereNull(`breed.deleted_at`)
        .withGraphJoined('category')
        .whereNull(`category.deleted_at`)
        .withGraphJoined('father.[breed, category, father, mother, origin]')
        .whereNull(`father.deleted_at`)
        .withGraphJoined('mother.[breed, category, father, mother, origin]')
        .whereNull(`mother.deleted_at`)
        .withGraphJoined('origin')
        .whereNull(`origin.deleted_at`)
        .withGraphJoined('checkup')
        .whereNull(`checkup.deleted_at`)
        .withGraphJoined('collection.diagnosis')
        .whereNull(`collection.deleted_at`)
        .withGraphJoined('vaccines')
        .whereNull(`vaccines.deleted_at`)
        .withGraphJoined('weights')
        .whereNull(`weights.deleted_at`);
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

module.exports = Cattle;
