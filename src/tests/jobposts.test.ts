import { bookShelf, knexConfig } from "../config/dbConfig";
import mockKnex from "mock-knex";
import chai from "chai";
import { set, reset } from "mockdate";
import { getAllJobPosts } from "../controllers/jobPostController";
import request from "supertest";
import { app } from "../index";
import { createJobPostApplicationTable } from "../schemas/create_table";
const assert = chai.assert;

const expect = chai.expect;
const tracker = mockKnex.getTracker();

const jobPostEndpoint: string = "/api/jobposts";
const applicationEndpoint: string = "/api/apps";

describe("Test JobPost API", () => {
  // const date = "2021-11-30T18:10:10.441Z";
  // let bookShelfForTest: any;
  // beforeEach(() => {
  //   set(date);
  //   bookShelfForTest = bookShelf;
  // });
  // afterEach(() => {
  //   reset();
  //   return bookShelfForTest.knex.destroy();
  // });
  // tracker.install();

  describe("get all job posts", () => {
    it("get all: success message", function (done) {
      request(app)
        .get(`${jobPostEndpoint}/all`)
        // .expect("Content-Type", "text / plain")
        .expect(200)
        .end((error, response) => {
          expect(JSON.parse(response.text).data.length).to.equal(3);
          // JSON.parse(response.text).data[0].should.have.property("location");
          console.log(`${typeof response.text}`);
          console.log(`!!!!!!!!${JSON.parse(response.text).data[0].location}`);
          done();
        });
    });

    it("", function (done) {
      request(app).get(`${jobPostEndpoint}/id/1`).expect("Content-Type", /json/).expect(200, done);
    });
    it("create jobpost", function (done) {
      request(app)
        .post(`${jobPostEndpoint}/create`)
        .send({
          title: "software engineer",
          description: "spring boot",
          location: "Toronto",
          hourlyPayRate: 40,
        })
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    // it("return posts test - sort by reads in descending order (parameters: 'politics', 'reads', 'desc')", function (done) {
    //   request(app).get(jobPostEndpoint).expect("Content-Type", /json/).expect(200, done);
    // });
    // it("return posts test - sort by authorId in EXPLICIT query parameter of descending order  (parameters: 'politics', 'authorId', 'asc')", function (done) {
    //   request(app).get(jobPostEndpoint).expect("Content-Type", /json/).expect(200, done);
    // });
    // });
    // });
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
    // });
  });
});
