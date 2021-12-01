import Knex from "knex";
import BookShelf from "bookshelf";
import { dbClient, dbName, dbPassword, dbUsername, host } from "./dbConfigDetails";

const isDebug: boolean = (process.env.NODE_ENV === 'test') ? false : true;

export const knexConfig: any = Knex({
  client: dbClient,
  connection: {
    host: host,
    database: dbName,
    user: dbUsername,
    password: dbPassword,
  },
  acquireConnectionTimeout: 10000,
  debug: isDebug,
});

export const bookShelf: any = BookShelf(knexConfig);

