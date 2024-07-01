const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('collection', function(table) {
    table.increments('id').primary();
    table.string('date').nullable();
    table.decimal('litres', 20, 8).nullable();
    table.integer('illness').unsigned();
    table.decimal('density', 20, 8).nullable();
    table.integer('cattle_id').nullable();
    table.string('observation', 250).nullable();
    defaultColumns(table);

    table.foreign('illness').references('diagnosis.id');
    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('collection');
};
