"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../Utils/catchAsync"));
const appError_1 = __importDefault(require("../../Error/appError"));
const service_1 = __importDefault(require("./service"));
const sendResponse_1 = __importDefault(require("../../Utils/sendResponse"));
//1. create a user.
// const signup = catchAsync(async (req: Request, res: Response) => {
//   const result = await AuthenticationService.signup(req.body);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     data: result,
//     message: "User signup successfully",
//   });
// });
// 2. login a user.
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        throw new appError_1.default(401, "invalid email or password!");
    }
    const result = yield service_1.default.login(req.body);
    const { data, accessToken } = result;
    res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "User logged in successfully",
        success: true,
        token: accessToken,
    });
}));
//3. login a user.
// const getCurrentUser = catchAsync(async (req: Request, res: Response) => {
//   const result = await AuthenticationService.getCurrentUser(req.userId);
//   sendResponse(res, {
//     data:result,
//     statusCode: httpStatus.OK,
//     message: "Current logged in user id retrieved successfully",
//     success: true,
//   });
// });
// 4.chage pass.
// const chagePassword = catchAsync(async (req: Request, res: Response) => {
//   const data = await AuthenticationService.changePassword(req.body);
//   sendResponse(res, {
//     data,
//     statusCode: httpStatus.OK,
//     message: "password chaged successfully",
//     success: true,
//   });
// });
// 5.rest pass.
// const restPassword = catchAsync(async (req: Request, res: Response) => {
//   const data = await AuthenticationService.resetPassword(req.body);
//   sendResponse(res, {
//     data,
//     statusCode: httpStatus.OK,
//     message: "reset email sended successfully",
//     success: true,
//   });
// });
// 5.rest new pass.  Part-2
// const resetNewPassword = catchAsync(async (req: TRequest, res: Response) => {
//   if (req.user?.email) new appError(httpStatus.BAD_REQUEST, "No email found");
//   const data = await AuthenticationService.resetNewPassword({
//     newPassword: req.body.newPassword,
//     email: req?.user?.email,
//   });
//   sendResponse(res, {
//     data,
//     statusCode: httpStatus.OK,
//     message: "password updated successfully",
//     success: true,
//   });
// });
// 6. get logged in user.
// const getloggedInUser=catchAsync(async (req: TRequest, res: Response) => {
//   if(!req.user?.email){
//     throw new appError(401,"No email found")
//   }
//   const data=await AuthenticationService.getLoggedInuser(req.user?.email as string)
//   sendResponse(res, {
//     data,
//     statusCode: httpStatus.OK,
//     message: "loggedin user fetched successfully",
//     success: true,
//   });
// });
//  exporting the modules.
const authenticationController = {
    //   signup,
    //   getloggedInUser,
    login,
    //   chagePassword,
    //   restPassword,
    //   resetNewPassword,
    // getCurrentUser
};
exports.default = authenticationController;
