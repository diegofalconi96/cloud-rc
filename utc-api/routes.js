const userRoutes = require('./src/routes/user.routes');
const originRoutes = require('./src/routes/origin.routes');
const breedsRoutes = require('./src/routes/breeds.routes');
const categoriesRoutes = require('./src/routes/categories.routes');
const diagnosisRoutes = require('./src/routes/diagnosis.routes');
const companiesRoutes = require('./src/routes/companies.routes');
const cattleRoutes = require('./src/routes/cattle.routes');
const checkupRoutes = require('./src/routes/checkup.routes');
const collectionRoutes = require('./src/routes/collection.routes');
const vaccinesRoutes = require('./src/routes/vaccines.routes');
const weightRoutes = require('./src/routes/weight.routes');

function registerRoutes(app) {
  // company
  app.get('/api/companies', companiesRoutes.getAll);
  app.get('/api/companies/:id', companiesRoutes.detail);
  app.post('/api/companies', companiesRoutes.create);
  app.patch('/api/companies/:id', companiesRoutes.update);
  app.delete('/api/companies/:id', companiesRoutes.del);

  // users
  app.post('/api/users/auth', userRoutes.authUser);
  app.get('/api/users', userRoutes.getAll);
  app.get('/api/users/:id', userRoutes.detail);
  app.post('/api/users', userRoutes.create);
  app.patch('/api/users/:id', userRoutes.update);
  app.delete('/api/users/:id', userRoutes.del);

  // origin
  app.get('/api/origin', originRoutes.getAll);
  app.get('/api/origin/:id', originRoutes.detail);
  app.post('/api/origin', originRoutes.create);
  app.patch('/api/origin/:id', originRoutes.update);
  app.delete('/api/origin/:id', originRoutes.del);

  // breeds
  app.get('/api/breeds', breedsRoutes.getAll);
  app.get('/api/breeds/:id', breedsRoutes.detail);
  app.post('/api/breeds', breedsRoutes.create);
  app.patch('/api/breeds/:id', breedsRoutes.update);
  app.delete('/api/breeds/:id', breedsRoutes.del);

  // categories
  app.get('/api/categories', categoriesRoutes.getAll);
  app.get('/api/categories/:id', categoriesRoutes.detail);
  app.post('/api/categories', categoriesRoutes.create);
  app.patch('/api/categories/:id', categoriesRoutes.update);
  app.delete('/api/categories/:id', categoriesRoutes.del);

  // diagnosis
  app.get('/api/diagnosis', diagnosisRoutes.getAll);
  app.get('/api/diagnosis/:id', diagnosisRoutes.detail);
  app.post('/api/diagnosis', diagnosisRoutes.create);
  app.patch('/api/diagnosis/:id', diagnosisRoutes.update);
  app.delete('/api/diagnosis/:id', diagnosisRoutes.del);

  // cattle
  app.get('/api/cattle', cattleRoutes.getAll);
  app.get('/api/cattle/:id', cattleRoutes.detail);
  app.post('/api/cattle', cattleRoutes.create);
  app.patch('/api/cattle/:id', cattleRoutes.update);
  app.delete('/api/cattle/:id', cattleRoutes.del);
  app.post('/api/cattle/upload-file', cattleRoutes.uploadFile);

  // checkup
  app.get('/api/checkup', checkupRoutes.getAll);
  app.get('/api/checkup/:id', checkupRoutes.detail);
  app.post('/api/checkup', checkupRoutes.create);
  app.patch('/api/checkup/:id', checkupRoutes.update);
  app.delete('/api/checkup/:id', checkupRoutes.del);

  // collection
  app.get('/api/collection', collectionRoutes.getAll);
  app.get('/api/collection/:id', collectionRoutes.detail);
  app.post('/api/collection', collectionRoutes.create);
  app.patch('/api/collection/:id', collectionRoutes.update);
  app.delete('/api/collection/:id', collectionRoutes.del);

  // vaccines
  app.get('/api/vaccines', vaccinesRoutes.getAll);
  app.get('/api/vaccines/:id', vaccinesRoutes.detail);
  app.post('/api/vaccines', vaccinesRoutes.create);
  app.patch('/api/vaccines/:id', vaccinesRoutes.update);
  app.delete('/api/vaccines/:id', vaccinesRoutes.del);

  // weight
  app.get('/api/weight', weightRoutes.getAll);
  app.get('/api/weight/:id', weightRoutes.detail);
  app.post('/api/weight', weightRoutes.create);
  app.patch('/api/weight/:id', weightRoutes.update);
  app.delete('/api/weight/:id', weightRoutes.del);
}

module.exports = { registerRoutes };
