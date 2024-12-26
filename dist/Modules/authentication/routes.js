"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
// signup.
// router.post("/signup",multerUpload.upload.single("photo"),liveUrlSetter("photo"),authenticationController.signup)
// login
router.post("/login", controller_1.default.login);
// loggedIn user
// router.get("/loggedIn-user",auth([roles.User,roles.Admin,roles.Vendor]),authenticationController.getloggedInUser)
// resetPass.
// router.post("/reset",authenticationController.restPassword) 
// respassword with new password enter.
// router.post("/reset-new-password",auth([roles.User,roles.Admin,roles.Vendor]),authenticationController.resetNewPassword)
// update.
// router.post("/update",authenticationController.chagePassword)
// export the module.
const authenticationRoutes = router;
exports.default = authenticationRoutes;
