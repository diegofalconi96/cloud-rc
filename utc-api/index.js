const express = require('express');
const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { registerRoutes } = require('./routes');
const path = require('path');

const app = express();
const knex = Knex(knexConfig.development);
knex.debug(true);
Model.knex(knex);

app.use(express.json({ limit: '10mb' }));
app.use('/files', express.static(path.join(__dirname, 'files')));


registerRoutes(app);

app.listen(3000, () => {
  console.log('Servidor Express iniciado en el puerto 3000');
});
