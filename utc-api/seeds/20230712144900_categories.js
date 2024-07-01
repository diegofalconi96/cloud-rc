exports.seed = async function(knex) {
  await knex('categories').del();
  await knex('categories').insert([
    {
      id: 1,
      name: 'Lactante',
      description: 'Ternera desde nacimiento hasta el destete',
    },
    {
      id: 2,
      name: 'Vacona',
      description: 'Ternera desde el destete hasta la inseminación',
    },
    {
      id: 3,
      name: 'Vientre',
      description: 'Vacona preñada',
    },
    {
      id: 4,
      name: 'Vaca',
      description: 'Vacas en producción',
    },
    {
      id: 5,
      name: 'Seca',
      description: 'Vacas que no dan leche',
    },
    {
      id: 6,
      name: 'Ternero',
      description: 'Ternero desde nacimiento hasta el destete',
    },
    {
      id: 7,
      name: 'Torete',
      description: 'Torete desde el destete hasta  el año y medio',
    },
  ]);
};

