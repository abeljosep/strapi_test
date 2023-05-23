const path = require('path');

module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  //   },
  //   useNullAsDefault: true,
  //   debug: false,
  // },
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST'),
      port: env.int('DB_PORT'),
      database: env('DB_NAME'),
      user: env('DB_USER'),
      password: env('DB_PASS'),
      ssl: false,
    },
    debug: false,
  }
});
