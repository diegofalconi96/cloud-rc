const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('companies', function(table) {
    table.increments('id').primary();
    table.string('company_code', 200).notNullable();
    table.string('company_name', 200).notNullable();
    table.string('responsible', 200).notNullable();
    table.string('dni', 20).nullable();
    table.string('contact', 20).nullable();
    table.string('email', 200).nullable();
    table.string('city', 200).nullable();
    table.string('parish', 200).nullable();
    table.string('quarter', 200).nullable();
    table.string('neighborhood', 200).nullable();
    table.string('address', 200).nullable();
    table.string('coordinates', 200).nullable();
    table.string('code_address', 200).nullable();
    table.decimal('surface', 20, 8).nullable().defaultTo(0);
    table.decimal('fertility_percentage', 20, 8).nullable().defaultTo(0);
    table.decimal('birth_rate', 20, 8).nullable().defaultTo(0);
    table.decimal('mortality_rate', 20, 8).nullable().defaultTo(0);
    table.decimal('weaning_percentage', 20, 8).nullable().defaultTo(0);
    table.decimal('liters_of_milk', 20, 8).nullable().defaultTo(0);
    table.string('observation', 250).nullable();
    defaultColumns(table);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('companies');
};
