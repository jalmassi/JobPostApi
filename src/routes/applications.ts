import express, { NextFunction, Request, Response } from "express";
import errorHandler from "../middleware/errorHandler";
import AppError from "../errors/AppError";
import { getAllApplications } from "../controllers/applicationController";

const router = express.Router();

router.get("/all", getAllApplications);

router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

router.use(errorHandler);
export default router;
