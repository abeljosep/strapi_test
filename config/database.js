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
      connectionString: "postgresql://neondb_owner:npg_TO5H6AkPiopX@ep-billowing-block-a8d7tno6-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
     schema: env('DB_SCHEMA', "public"),
    },
    debug: false,
  }
});
