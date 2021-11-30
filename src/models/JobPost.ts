import { bookShelf } from "../config/dbConfig";

// Defining and registering a model
export const JobPost = bookShelf.Model.extend({
  tableName: "jobposts",
  applications() {
    return this.belongsToMany("Application");
  },
});
