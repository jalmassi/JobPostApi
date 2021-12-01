import { knexConfig } from "../config/dbConfig";

export const createJobPostTable = knexConfig.schema
  .createTableIfNotExists("jobposts", (table: any) => {
    table.increments("id");
    table.string("title");
    table.string("description");
    table.string("location");
    table.integer("hourlyPayRate");
    table.timestamps();
  })
  .then(() => {
    console.log("table created");
  })
  .catch((error: Error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    console.log("finally - destroy");
    knexConfig.destroy();
  });
