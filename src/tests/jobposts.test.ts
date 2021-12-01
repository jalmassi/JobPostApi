import { bookShelf, knexConfig } from "../config/dbConfig";
import mockKnex from "mock-knex";
import chai from "chai";
import { set, reset } from "mockdate";
import { getAllJobPosts } from "../controllers/jobPostController";
import request from "supertest";
const assert = chai.assert;

const expect = chai.expect;
const tracker = mockKnex.getTracker();

describe("Test JobPost API", () => {

  const date = "2021-11-30T18:10:10.441Z";
  let bookShelfForTest: any;
  beforeEach(() => {
    set(date);
    bookShelfForTest = bookShelf;
  });
  afterEach(() => {
    reset();
    return bookShelfForTest.knex.destroy();
  });
  tracker.install();

  describe("get all job posts", () => {
    before(() => {
      tracker.on("query", (query) => {
        const results = [
          {
            id: 1,
            title: "devops",
            description: "kubernetes",
            location: "Toronto",
            hourlyPayRate: 30,
            updatedAt: date,
            createdAt: date,
          },
        ];
        query.response(results);
      });
    });
    // it('should return 1 user', () => {
    //         return getAllJobPosts
    //             .then((res) => {
    //                 const users = res.toJSON();

    //                 expect(users).to.have.property('length', 1);
    //                 expect(users[0]).to.have.property('esp', false);
    //                 expect(users[1]).to.have.property('firstName', 'B');
    //                 expect(users[2]).to.have.property('lastName', 'C');
    //             })
    //         ;
    //     });
  });
});
