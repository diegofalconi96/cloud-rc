const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('checkup', function(table) {
    table.increments('id').primary();
    table.string('date').nullable();
    table.string('symptom', 250).nullable();
    table.string('diagnosis', 250).nullable();
    table.string('treatment', 250).nullable();
    table.integer('cattle_id').nullable();
    table.string('observation', 250).nullable();
    defaultColumns(table);

    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('checkup');
};
