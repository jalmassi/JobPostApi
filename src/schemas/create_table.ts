import { knexConfig } from "../config/dbConfig";

export const createJobPostApplicationTable = knexConfig.schema
  .createTableIfNotExists("jobposts", (table: any) => {
    table.increments("id");
    table.string("title");
    table.string("description");
    table.string("location");
    table.integer("hourlyPayRate");
    table.timestamps();
  })
  .createTableIfNotExists("applications", (table: any) => {
    table.increments("id");
    table.string("name");
    table.string("currentjob");
    table.string("location");
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
