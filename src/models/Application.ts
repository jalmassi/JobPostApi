import { bookShelf } from "../config/dbConfig";

const Application = bookShelf.Model.extend({
  tableName: "applications",
  jobposts() {
    return this.belongsToMany("JobPost");
  },
});
