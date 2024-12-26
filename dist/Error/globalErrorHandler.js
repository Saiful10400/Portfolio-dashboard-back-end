"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appError_1 = __importDefault(require("./appError"));
const jsonwebtoken_1 = require("jsonwebtoken");
const globalErrorHandler = (err, req, res, next) => {
    // setting initial value of error object property.
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorMessages = [
        {
            path: "",
            message: "something went wrong!",
        },
    ];
    // manupulate defaultvalue according condition.
    if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        errorMessages = [
            {
                path: "",
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    else if (err instanceof jsonwebtoken_1.JsonWebTokenError) {
        statusCode = 400;
        message = err.message;
    }
    res.status(statusCode).send({
        success: false,
        message,
        errorMessages,
        // err,
        stack: (err === null || err === void 0 ? void 0 : err.stack) || null,
    });
};
exports.default = globalErrorHandler;
