import path from "path";
import knex from "knex";
import { dbName, dbPassword, dbUsername, host } from "../src/config/dbConfigDetails";
// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: host,
      database: dbName,
      user: dbUsername,
      password: dbPassword,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },
};

// export const knexWithEnv: unknown = knex(knexConfig[process.env.NODE_ENV]);
