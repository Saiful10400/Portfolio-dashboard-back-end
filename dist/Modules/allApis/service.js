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
const prismaConfig_1 = __importDefault(require("../../Config/prismaConfig"));
// get perosnal info.
const getPersonalInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaConfig_1.default.personalInfo.findFirst({
        where: {
            id: 1
        }
    });
    return result;
});
// update personal info.
const updatePersonalInfo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaConfig_1.default.personalInfo.update({
        where: {
            id: 1
        },
        data: payload
    });
});
// get blog.
const getBlogs = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.query.slug) {
        const result = yield prismaConfig_1.default.blog.findFirst({
            where: {
                slug: payload.query.slug
            }
        });
        return result;
    }
    else {
        const result = yield prismaConfig_1.default.blog.findMany();
        return result;
    }
});
// create blog.
const createBlogs = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaConfig_1.default.blog.create({
        data: payload
    });
    return result;
});
// getProject.
const getProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.query.slug) {
        const result = yield prismaConfig_1.default.project.findFirst({
            where: {
                slug: payload.query.slug
            }
        });
        return result;
    }
    else {
        const result = yield prismaConfig_1.default.project.findMany();
        return result;
    }
});
// createProject.
const createProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaConfig_1.default.project.create({
        data: payload
    });
    return result;
});
const allApiService = {
    getPersonalInfo,
    updatePersonalInfo,
    getBlogs,
    createBlogs,
    getProject,
    createProject
};
exports.default = allApiService;
