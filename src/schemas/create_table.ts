import { knexConfig } from "../config/dbConfig";
import { applicationsData, jobpostsData } from "./starting_data";

export const createJobPostApplicationTable = knexConfig.schema.dropTableIfExists("jobposts").then();
knexConfig.schema.dropTableIfExists("applications").then();
knexConfig.schema
  .createTableIfNotExists("jobposts", (table: any) => {
    table.increments("id");
    table.string("title");
    table.string("description");
    table.string("location");
    table.integer("hourlyPayRate");
    table.timestamp("created_at").defaultTo(knexConfig.fn.now());
    table.timestamp("updated_at").defaultTo(knexConfig.fn.now());
  })
  .createTableIfNotExists("applications", (table: any) => {
    table.increments("id");
    table.string("name");
    table.string("currentJob");
    table.string("location");
    table.timestamp("created_at").defaultTo(knexConfig.fn.now());
    table.timestamp("updated_at").defaultTo(knexConfig.fn.now());
  })
  .then(() => {
    return knexConfig("jobposts").insert(jobpostsData).returning("*");
  })
  .then(() => {
    return knexConfig("applications").insert(applicationsData).returning("*");
  })
  .catch((error: Error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    console.log("created tables and inserted data");
  });
