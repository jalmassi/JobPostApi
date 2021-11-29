import { CommonError } from "../types/CommonError";

const commonErrors: Array<CommonError> = [
  {
    status: "BAD_REQUEST",
    message: "Bad request",
    statusCode: 400,
  },
  {
    status: "UNAUTHORIZED",
    message: "Unauthorized",
    statusCode: 401,
  },
  {
    status: "FORBIDDEN",
    message: "Forbidden",
    statusCode: 403,
  },
  {
    status: "RESOURCE_NOT_FOUND",
    message: "Resource not found",
    statusCode: 404,
  },

  // Predefined 5xx http errors
  {
    status: "INTERNAL_SERVER_ERROR",
    message: "Something went wrong, Please try again later.",
    statusCode: 500,
  },
  {
    status: "BAD_GATEWAY",
    message: "Bad gateway",
    statusCode: 502,
  },
  {
    status: "SERVICE_UNAVAILABLE",
    message: "Service unavailable",
    statusCode: 503,
  },
  {
    status: "GATEWAY_TIMEOUT",
    message: "Gateway timeout",
    statusCode: 504,
  },
];

export default commonErrors;
