exports.defaultColumns = function(table) {
  table.string('uuid').defaultTo(null);
  table.bool('sync').defaultTo(true);
  table.integer('company_id').unsigned();
  table.timestamps(true, true);
  table.datetime('deleted_at').defaultTo(null);
};
