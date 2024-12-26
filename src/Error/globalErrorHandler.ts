import { ErrorRequestHandler } from "express";
import { TerrorMessage } from "./error.interface";
import appError from "./appError";
import { JsonWebTokenError } from "jsonwebtoken";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // setting initial value of error object property.
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessages: TerrorMessage[] = [
    {
      path: "",
      message: "something went wrong!",
    },
  ];

  // manupulate defaultvalue according condition.

  if (err instanceof appError) {
    statusCode = err.statusCode;
    message = err.message;
    errorMessages = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof JsonWebTokenError) {
    statusCode = 400;
    message = err.message;
  }

  res.status(statusCode).send({
    success: false,
    message,
    errorMessages,
    // err,
    stack: err?.stack || null,
  });
};

export default globalErrorHandler;
