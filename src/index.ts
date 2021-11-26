const ping = require("./routes/ping");

import express, { Application, Request, Response } from "express";
import posts from "./routes/posts";
import bodyParser from "body-parser";
import logger from "morgan";
import handleErrors from "./middleware/errorHandler";

const app: Application = express();
app.use(logger("combined"));
app.use("/api/posts", posts);
app.use("/api", ping);
app.use(bodyParser.json());

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
