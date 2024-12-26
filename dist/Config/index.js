"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    frontEndUrl: process.env.FRONT_END_URL,
    frontEndUrlDevelopment: process.env.FRONT_END_URL_DEVELOPMENT,
    jwtSecret: process.env.JWT_SECRET,
    tokenLife: process.env.TOKEN_LIFE
};