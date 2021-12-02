import express, { Application, Request, Response } from "express";
import jobposts from "./routes/jobposts";
import applications from "./routes/applications";
import bodyParser from "body-parser";
import logger from "morgan";
import handleErrors from "./middleware/errorHandler";
import AppError from "./errors/AppError";
import { createJobPostApplicationTable } from "./schemas/create_table";
import { appRoute, jobpostRoute } from "./util/global";

export const app: Application = express();
app.use(logger("combined"));
app.use(appRoute, applications);
app.use(jobpostRoute, jobposts);
app.use(bodyParser.json());

// Promise.all([createJobPostApplicationTable]);
createJobPostApplicationTable();

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
