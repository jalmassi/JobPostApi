import { bookShelf } from "../config/dbConfig";

// Defining and registering a model
export const JobPosts = bookShelf.model("Post", {
  tableName: "jobposts",
  applications() {
    return this.belongsToMany("Application");
  },
});
