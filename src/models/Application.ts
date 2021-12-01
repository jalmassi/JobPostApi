import { bookShelf } from "../config/dbConfig";

export const Application = bookShelf.Model.extend({
  tableName: "applications",
  jobposts() {
    return this.belongsToMany("JobPost");
  },
});
