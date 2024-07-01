const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('vaccines', function(table) {
    table.increments('id').primary();
    table.string('date').nullable();
    table.string('name', 200).nullable();
    table.integer('cattle_id').nullable();
    table.string('observation', 250).nullable();
    defaultColumns(table);

    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vaccines');
};
