module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'ojsuser',
      password: '1234',
      database: 'utcapi',
    },
    migrations: {
      directory: './migrations',
    },
  },
};
