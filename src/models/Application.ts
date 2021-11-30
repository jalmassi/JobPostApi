import { bookShelf } from "../config/dbConfig";

const Application = bookShelf.model("Application", {
  tableName: "applications",
  jobposts() {
    return this.belongsToMany("JobPost");
  },
});
