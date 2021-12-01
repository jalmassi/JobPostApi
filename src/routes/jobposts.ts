import { NextFunction, Request, Response } from "express";
import express from "express";
import errorHandler from "../middleware/errorHandler";
import AppError from "../errors/AppError";
import { createJobPost, deleteJobPost, getAllJobPosts, getJobPostById, updateJobPost } from "../controllers/jobPostController";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

router.get("/all", getAllJobPosts);
router.get("/id/:id", getJobPostById);
router.post("/create", createJobPost);
router.put("/update/:id", updateJobPost);
router.delete("/delete/:id", deleteJobPost);

router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

router.use(errorHandler);

export default router;
