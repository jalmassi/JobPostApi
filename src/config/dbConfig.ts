import Knex from "knex";
import BookShelf from "bookshelf";

const dbClient: string = "mysql";
const dbName: string = "JobPostDB";
const host: string = "localhost";
const dbUsername: string = "root";
const dbPassword: string = "Forget14";

export const dbConfig = {
  host: host,
  user: dbUsername,
  password: dbPassword,
};

export const knexConfig: any = Knex({
  client: dbClient,
  connection: {
    host: host,
    database: dbName,
    user: dbUsername,
    password: dbPassword,
  },
  debug: true,
});

export const bookShelf: any = BookShelf(knexConfig);
