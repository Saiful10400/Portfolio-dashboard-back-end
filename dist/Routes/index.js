"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("../Modules/authentication/routes"));
const routes_2 = __importDefault(require("../Modules/allApis/routes"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: routes_1.default
    },
    {
        path: "/all",
        route: routes_2.default
    },
];
moduleRoutes.forEach(item => router.use(item.path, item.route));
exports.default = router;
