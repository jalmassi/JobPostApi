import express, { Application, Request, Response } from "express";
import mysql from "mysql";
import posts from "./routes/posts";
import bodyParser from "body-parser";
import logger from "morgan";
import handleErrors from "./middleware/errorHandler";
import AppError from "./errors/appError";
import { dbConfig } from "./config/dbConfig";

const app: Application = express();
app.use(logger("combined"));
app.use("/api/posts", posts);
app.use(bodyParser.json());

const con = mysql.createConnection({
  ...dbConfig,
});

con.connect(function (err: Error) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE JobPostDB", function (err: Error, result: any) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });
});

const PORT: any = process.env.PORT || 3000;
const startServer = (port: number | string) => {
  try {
    app.listen(port);
    console.log(`App listening on port ${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

app.get("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(handleErrors);

startServer(PORT);

export default app;
