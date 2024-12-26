"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(err => {
            // console.log(err)
            next(err);
        });
        // Promise.resolve(fn(req,res,next)).catch(err=>console.log(err))
    };
};
exports.default = catchAsync;
