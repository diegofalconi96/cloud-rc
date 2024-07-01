const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('weight', function(table) {
    table.increments('id').primary();
    table.string('date').nullable();
    table.decimal('weight', 20, 8).nullable();
    table.integer('cattle_id').nullable();
    table.string('observation', 250).nullable();
    defaultColumns(table);

    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('weight');
};
