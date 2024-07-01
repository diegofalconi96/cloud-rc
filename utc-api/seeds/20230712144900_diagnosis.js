exports.seed = async function(knex) {
  await knex('diagnosis').del();
  await knex('diagnosis').insert([
    {
      id: 1,
      name: 'Negativo',
      description: 'La mezcla permanece en estado líquido y homogéneo',
    },
    {
      id: 2,
      name: 'Poco(Trazas)',
      description: 'Hay algo de engrosamiento. ' +
      'La reacción es reversible y la viscosidad ' +
      'observada tiende a desaparecer',
    },
    {
      id: 3,
      name: 'Ligeramente Positivo',
      description: 'La mezcla espesa, pero no hay formación ' +
      'de gel en el medio de la paleta y la viscosidad observada ' +
      'tiende a persistir. La mezcla cae poco a poco',
    },
    {
      id: 4,
      name: 'Positivo',
      description: 'Gel se formará en el centro de la paleta durante ' +
      'movimiento giratorio. El gel se acumula en la parte inferior ' +
      'de la paleta cuando el movimiento giratorio de interrumpe',
    },
    {
      id: 5,
      name: 'Muy Positivo',
      description: 'Gel ser formará en el centro de la paleta y se pega ' +
      'al fondo, cuando se vierte la mezcla se cae sin dejar líquido detrás',
    },
  ]);
};

