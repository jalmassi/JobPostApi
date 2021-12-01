import { NextFunction, Request, Response } from "express";

import express from "express";
import axios from "axios";
import NodeCache from "node-cache";
import errorHandler from "../middleware/errorHandler";
import AppError from "../errors/AppError";
import { JobPost } from "../models/JobPost";
import { createJobPost, getAllJobPosts, getJobPostById, updateJobPost } from "../controllers/jobPostController";
import { createJobPostTable } from "../schemas/create_table";
const router = express.Router();

Promise.all([
  createJobPostTable
  ]);

router.get("/all", getAllJobPosts);
router.get("/id/:id", getJobPostById);
router.post("/create", createJobPost);
router.post("/update", updateJobPost);

// router.get(`/`, async (req: Request, res: Response, next: NextFunction) => {
//   if (req.query.tag === undefined || req.query.tag === "") return next(new AppError("No tag parameter included", 400));
//   const tagParams = req.query.tag;
//   const sortBy = req.query.sortBy || "id";
//   const direction = req.query.direction || "asc";
//   const cacheKey = `${tagParams}${sortBy}${direction}`;

//   if (cache.has(cacheKey)) {
//     res.send(cache.get(cacheKey));
//   } else {
//     await createTagRequestList(tagRequests, { tag: tagParams, sortBy: sortBy, direction: direction });
//     await Promise.all(tagRequests)
//       .then((response) => {
//         if (!response.length) {
//           next(new AppError("No posts have requested tag(s)", 400));
//         } else {
//           const posts = processRequestResponse(response);
//           sort(posts, direction, sortBy);
//           cache.set(cacheKey, posts);
//           res.send({ posts: posts });
//         }
//       })
//       .catch((error) => {
//         next(error);
//       });
//   }
// });

router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

router.use(errorHandler);

export default router;
function id(arg0: string, id: any) {
  throw new Error("Function not implemented.");
}
