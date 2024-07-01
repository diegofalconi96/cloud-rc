const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('breeds', function(table) {
    table.increments('id').primary();
    table.string('name', 100).nullable();
    table.string('description', 250).nullable();
    defaultColumns(table);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('breeds');
};
