exports.seed = async function(knex) {
  await knex('breeds').del();
  await knex('breeds').insert([
    {
      id: 1,
      name: 'Holstein',
      description: '',
    },
    {
      id: 2,
      name: 'Brown Swiss',
      description: '',
    },
    {
      id: 3,
      name: 'Jersey',
      description: '',
    },
    {
      id: 4,
      name: 'Mestiza',
      description: '',
    },
    {
      id: 5,
      name: 'Normando',
      description: '',
    },
    {
      id: 6,
      name: 'Montbeliarde',
      description: '',
    },
    {
      id: 7,
      name: 'Otro',
      description: '',
    },
  ]);
};

