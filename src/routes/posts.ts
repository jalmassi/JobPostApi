import { NextFunction, Request, Response } from "express";

const express = require("express");
const router = express.Router();
const axios = require("axios");
const NodeCache = require("node-cache");
const errorHandler = require("../middleware/errorHandler");
const AppError = require("../errors/appError");
const sort = require("../util/sort");
const processRequestResponse = require("../util/processRequest");
const createTagRequestList = require("../util/createTagRequestList");
const global = require("../util/global");

const cache = new NodeCache({ stdTTL: 300 });

let tagRequests: Array<string> = [];

router.get(`/`, async (req: Request, res: Response, next: NextFunction) => {
  if (req.query.tag === undefined || req.query.tag === "") return next(new AppError("No tag parameter included", 400));
  const tagParams = req.query.tag;
  const sortBy = req.query.sortBy || "id";
  const direction = req.query.direction || "asc";
  const cacheKey = `${tagParams}${sortBy}${direction}`;

  if (cache.has(cacheKey)) {
    res.send(cache.get(cacheKey));
  } else {
    await createTagRequestList(tagRequests, { tag: tagParams, sortBy: sortBy, direction: direction });
    await Promise.all(tagRequests)
      .then((response) => {
        if (!response.length) {
          next(new AppError("No posts have requested tag(s)", 400));
        } else {
          const posts = processRequestResponse(response);
          sort(posts, direction, sortBy);
          cache.set(cacheKey, posts);
          res.send({ posts: posts });
        }
      })
      .catch((error) => {
        next(error);
      });
  }
});

router.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

router.use(errorHandler);

export default router;
