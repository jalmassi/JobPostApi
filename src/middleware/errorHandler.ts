"use strict";
import AppError from "../errors/AppError";
import errors from "../errors/commonErrors";
import createError from "../errors/createError";
import { Response, Request, NextFunction } from "express";
import { CommonError } from "../errors/CommonErrorDAO";

const handleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = err.statusCode || 500;
  if (err instanceof AppError) {
    let filteredErrors = errors.filter((error: CommonError) => {
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
    const newError = createError(statusCode, err);
    const code = newError.statusCode || 500;
    return res.status(code).json({
      status: newError.statusCode ? newError.statusCode : 500,
      message: newError.message ? newError.message : "Unknown error",
    });
  }
};

export default handleErrors;
