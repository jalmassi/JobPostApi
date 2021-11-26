"use strict";
import * as appError from "../errors/appError";
import * as errors from "../errors/commonErrors";
import * as createError from "../errors/createError";
import { Response, Request, NextFunction } from "express";

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof appError) {
    let filteredErrors = errors.filter((error: Array<AppError>) => {
      return error.statusCode === err.statusCode;
    });
    console.log(`${filteredErrors.length}`);
    if (filteredErrors.length) {
      let { status, message, statusCode } = filteredErrors[0];
      return res.status(statusCode).json({
        status: status,
        message: message,
        details: err.message,
      });
    } else {
      return res.status(statusCode).json({
        status: err.statusCode ? err.statusCode : 500,
        message: err.message ? err.message : "Unknown error",
      });
    }
  }

  if (err instanceof Error) {
    const newError = createError(err.statusCode, err);
    const code = newError.statusCode || 500;
    return res.status(code).json({
      status: newError.statusCode ? newError.statusCode : 500,
      message: newError.message ? newError.message : "Unknown error",
    });
  }
};

export default handleErrors;
