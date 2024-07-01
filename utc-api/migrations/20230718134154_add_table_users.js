const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('last_name', 100).nullable();
    table.string('email').nullable();
    table.string('dni', 20).notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('role').notNullable();
    defaultColumns(table);

    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
