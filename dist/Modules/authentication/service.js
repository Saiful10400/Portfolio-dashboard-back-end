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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prismaConfig_1 = __importDefault(require("../../Config/prismaConfig"));
const appError_1 = __importDefault(require("../../Error/appError"));
const Config_1 = __importDefault(require("../../Config"));
// 1. signup.
// const signup = async (payload: Tuser) => {
//   // let's check is the same user is exixt or not.
//   const isUserExist = await prisma.user.findFirst({
//     where: {
//       email: payload.email,
//     },
//   });
//   if (isUserExist)
//     throw new appError(httpStatus.CONFLICT, "This email address already used!");
//   // use transection for insertion.
//   const result = await prisma.$transaction(async (tnx) => {
//     const createUser = await tnx.user.create({
//       data: {
//         email: payload.email,
//         role: payload.role,
//         password: payload.password,
//       },
//     });
//     // create other secondary users.
//     let profile;
//     if (createUser.role === "Admin") {
//       profile = await tnx.admin.create({
//         data: {
//           email: payload.email,
//           name: payload.name,
//           photo: payload.photo,
//           userId: createUser.userId,
//         },
//       });
//     }
//     if (createUser.role === "User") {
//       profile = await tnx.buyer.create({
//         data: {
//           email: payload.email,
//           name: payload.name,
//           photo: payload.photo,
//           userId: createUser.userId,
//         },
//       });
//     }
//     if (createUser.role === "Vendor") {
//       profile = await tnx.vendor.create({
//         data: {
//           email: payload.email,
//           name: payload.name,
//           photo: payload.photo,
//           userId: createUser.userId,
//         },
//       });
//     }
//     return { createUser, profile };
//   });
//   return result;
// };
// 2. login.
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prismaConfig_1.default.user.findFirst({
        where: {
            password: payload.password,
            email: payload.email,
        },
    });
    if (!data)
        throw new appError_1.default(httpStatus.UNAUTHORIZED, "Incorrect email or password!");
    // create jwt token.
    const jwtPayload = {
        email: data.email,
        status: data.status,
        role: data.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, Config_1.default.jwtSecret, {
        expiresIn: Config_1.default.tokenLife,
    });
    return { data, accessToken };
});
//2. getucrrentuser.
// const getCurrentUser = async (payload:string) => {
//   const result=await signupModel.findById(payload)
//   return result
// };
// 3. change pasword.
// const changePassword = async (payload: {
//   newPassword: string;
//   oldPassword: string;
//   email: string;
// }) => {
//   await prisma.user.findFirstOrThrow({
//     where: {
//       email: payload.email,
//       password: payload.oldPassword,
//     },
//   });
//   await prisma.user.updateMany({
//     where: {
//       password: payload.oldPassword,
//       email: payload.email,
//     },
//     data: {
//       password: payload.newPassword,
//     },
//   });
//   const reult = await prisma.user.findFirst({
//     where: {
//       password: payload.newPassword,
//       email: payload.email,
//     },
//   });
//   return reult;
// };
//  4. reset password.
// const resetPassword = async (payload: { email: string }) => {
//   const user = await prisma.user.findFirstOrThrow({
//     where: {
//       email: payload.email,
//     },
//   });
//   const token = jwt.sign(
//     { email: user.email, role: user.role, status: user.status },
//     config.jwtSecret as string,
//     {
//       expiresIn: "5m",
//     }
//   );
//   const result = `${config.frontend_url}/reset-password?token=${token}`;
//   return sendMail(result, payload.email);
// };
//  5. reset new password.
// const resetNewPassword = async (payload: {
//   newPassword: string;
//   email: string | undefined;
// }) => {
//   const result = await prisma.user.updateMany({
//     where: {
//       email: payload.email,
//     },
//     data: {
//       password: payload.newPassword,
//     },
//   });
//   return result;
// };
//getLogged in user.
// const getLoggedInuser = async (email: string) => {
//   const result = await prisma.user.findFirstOrThrow({
//     where: {
//       email,
//     },
//     select:{
//       admin:true,
//       followingStore:{select:{shopId:true}},
//       userId:true,
//       buyer:true,
//       email:true,
//       role:true,
//       status:true,
//       order:{
//         select:{
//           productOrder:{
//             select:{
//               porductId:true
//             }
//           }
//         }
//       },
//       vendor:{
//         select:{
//           email:true,
//           isDeleted:true,
//           name:true,
//           photo:true,
//           vendorId:true,
//           shopId:{
//             select:{
//               name:true,
//               logo:true,
//               status:true,
//               shopId:true,
//               _count:{
//                 select:{
//                   followersId:true,
//                   products:true,
//                   coupne:true
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   });
//   return result;
// };
const AuthenticationService = {
    //   signup,
    login,
    //   changePassword,
    //   resetPassword,
    //   resetNewPassword,
    //   getLoggedInuser,
};
exports.default = AuthenticationService;
