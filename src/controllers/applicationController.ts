import { Request, Response } from "express";
import { Application } from "../models/Application";

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const response = await Application.forge()
      .fetchAll()
      .then(function (data: any) {
        const res = {
          success: true,
          data: data,
        };
        return res;
      })
      .catch((error: Error) => {
        const res = {
          success: false,
          error: error,
        };
        return res;
      });

    res.json(response);
  } catch (e) {
    console.log(`Failed to fetch the data: ${e}`);
  }
};
