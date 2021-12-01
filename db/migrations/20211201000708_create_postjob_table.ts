import { Knex } from "knex";
import { knexConfig } from "../../src/config/dbConfig";


export async function up(knex: Knex): Promise<void> {
    knexConfig.schema.createTable("jobpostdb", (table: any) => {
      table.increments("id");
      table.string("title");
      table.string("description");
      table.string("location");
      table.integer("hourlyPayRate");
      table.timestamps();
    });
}


export async function down(knex: Knex): Promise<void> {
    knexConfig.schema.destroyTable('jobpostdb');
}
