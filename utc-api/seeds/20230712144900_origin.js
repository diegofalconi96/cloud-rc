exports.seed = async function(knex) {
  await knex('origin').del();
  await knex('origin').insert([
    {
      id: 1,
      name: 'Propio',
      description: 'Nacidas dentro del predio',
    },
    {
      id: 2,
      name: 'Externo',
      description: 'Provienen de otro sitio',
    },
  ]);
};

