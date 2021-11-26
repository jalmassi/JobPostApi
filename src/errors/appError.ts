class AppError extends Error {
  constructor(message: String, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = message
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
