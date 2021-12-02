import { knexConfig } from "../config/dbConfig";
import { applicationsData, jobpostsappData, jobpostsData } from "./starting_data";

export const createJobPostApplicationTable = knexConfig.schema.dropTableIfExists("jobposts_applications").then();
knexConfig.schema.dropTableIfExists("jobposts").then();
knexConfig.schema.dropTableIfExists("applications").then();
knexConfig.schema
  .createTableIfNotExists("jobposts", (table: any) => {
    table.increments("id").primary();
    table.string("title");
    table.string("description");
    table.string("location");
    table.integer("hourlyPayRate");
    table.timestamp("created_at").defaultTo(knexConfig.fn.now());
    table.timestamp("updated_at").defaultTo(knexConfig.fn.now());
  })
  .createTableIfNotExists("applications", (table: any) => {
    table.increments("id").primary();
    table.string("name");
    table.string("currentJob");
    table.string("location");
    table.timestamp("created_at").defaultTo(knexConfig.fn.now());
    table.timestamp("updated_at").defaultTo(knexConfig.fn.now());
  })
  .createTableIfNotExists("jobposts_applications", (table: any) => {
    table.integer("jobposts_id").unsigned().references("id").inTable("jobposts").notNull();
    table.integer("applications_id").unsigned().references("id").inTable("applications").notNull();
    table.timestamp("created_at").defaultTo(knexConfig.fn.now());
    table.timestamp("updated_at").defaultTo(knexConfig.fn.now());
  })
  .then(() => {
    return knexConfig("jobposts").insert(jobpostsData).returning("*");
  })
  .then(() => {
    return knexConfig("applications").insert(applicationsData).returning("*");
  })
  .then(() => {
    return knexConfig("jobposts_applications").insert(jobpostsappData).returning("*");
  })
  .catch((error: Error) => {
    console.log(error);
    throw error;
  })
  .finally(() => {
    console.log("created tables and inserted data");
  });
