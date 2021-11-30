import Knex from "knex";
import BookShelf from "bookshelf";

const dbClient: string = "mysql";
const dbName: string = "JobPostDB";
const host: string = "localhost";
const dbUsername: string = "root";
const dbPassword: string = "Forget14";

export const knexConfig: any = Knex({
  client: dbClient,
  connection: {
    host: host,
    database: dbName,
    user: dbUsername,
    password: dbPassword,
  },
  acquireConnectionTimeout: 10000,
  debug: true,
});

export const bookShelf: any = BookShelf(knexConfig);

// const dbConfig = {
//   host: host,
//   user: dbUsername,
//   password: dbPassword,
// };

// const con = createConnection({
//   ...dbConfig,
// });

// con.connect(function (err: Error) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE JobPostDB", function (err: Error, result: any) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
