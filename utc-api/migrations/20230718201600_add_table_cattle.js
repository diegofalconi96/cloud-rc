const { defaultColumns } = require('./../helpers/migrationHelpers');

exports.up = function(knex) {
  return knex.schema.createTable('cattle', function(table) {
    table.increments('id').primary();
    table.string('code', 100).nullable();
    table.string('name', 100).nullable();
    table.string('register', 100).nullable();
    table.integer('gender').nullable();
    table.integer('category_id').unsigned();
    table.integer('origin_id').unsigned();
    table.integer('breed_id').unsigned();
    table.string('father_id').nullable();
    table.string('mother_id').nullable();
    table.string('other_breed', 200).nullable();
    table.string('date').nullable();
    table.decimal('weight', 20, 8).nullable().defaultTo(0);
    table.string('url_image', 200).nullable();
    defaultColumns(table);

    table.foreign('category_id').references('categories.id');
    table.foreign('origin_id').references('origin.id');
    table.foreign('breed_id').references('breeds.id');
    table.foreign('company_id').references('companies.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cattle');
};
