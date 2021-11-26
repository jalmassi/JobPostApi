const createError = (status: number, message: string) => {
  let error = new AppError(message);
  error.status = status;
  return error;
};

export default createError;
