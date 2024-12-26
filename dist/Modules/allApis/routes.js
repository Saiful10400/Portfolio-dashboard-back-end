"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
// personal info's.
router.get("/personalInfo", controller_1.default.getPersonalInfo);
router.post("/personalInfoUpdate", controller_1.default.updatePersonalInfo);
//blog
router.get("/blog", controller_1.default.getBlog);
router.post("/createBlog", controller_1.default.createBlog);
//project
router.get("/project", controller_1.default.getProject);
router.post("/createProject", controller_1.default.createProject);
const allRoutes = router;
exports.default = allRoutes;
