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
const catchAsync_1 = __importDefault(require("../../Utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../Utils/sendResponse"));
const service_1 = __importDefault(require("./service"));
const http_status_1 = __importDefault(require("http-status"));
// personal info getting.
const getPersonalInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_1.default.getPersonalInfo();
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "Profile data fetched.",
        success: true,
    });
}));
// update personal info.
const updatePersonalInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = service_1.default.updatePersonalInfo(req.body);
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "Information updated.",
        success: true,
    });
}));
// get blog.
const getBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_1.default.getBlogs(req);
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "Blogs retrieved.",
        success: true,
    });
}));
// update blog.
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = service_1.default.createBlogs(req.body);
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "Blogs created.",
        success: true,
    });
}));
//Project blog.
const getProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_1.default.getProject(req);
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "project retrieved.",
        success: true,
    });
}));
// update Project.
const createProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = service_1.default.createProject(req.body);
    (0, sendResponse_1.default)(res, {
        data,
        statusCode: http_status_1.default.OK,
        message: "Project created.",
        success: true,
    });
}));
const allController = {
    getPersonalInfo,
    updatePersonalInfo,
    getBlog,
    createBlog,
    createProject,
    getProject
};
exports.default = allController;
