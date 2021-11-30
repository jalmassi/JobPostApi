import { Request, Response } from "express";
import { JobPosts } from "../models/JobPost";

export const jobPosts = async (req: Request, res: Response) => {
  try {
    const response = await JobPosts.forge()
      .fetchAll()
      .then((jobposts: any) => {
        const res = {
          success: true,
          data: jobposts,
        };
        return res;
      });
  } catch (e: unknown) {
    console.error(`Failed to fetch the jobposts: ${e}`);
  }
};
