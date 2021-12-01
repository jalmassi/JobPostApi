import {knexConfig} from "../config/dbConfig";
import mockKnex from "mock-knex";
import chai from "chai";

const expect = chai.expect;
const tracker = mockKnex.getTracker();


describe("Test JobPost API", () => {
    tracker.install();
})