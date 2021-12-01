import AppError from "./AppError";

const createError = (statusCode: number, defaultError: Error) => {
  let error = new AppError(defaultError.message, statusCode);
  return error;
};

export default createError;
