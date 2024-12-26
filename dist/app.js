"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./Error/globalErrorHandler"));
const Config_1 = __importDefault(require("./Config"));
const Routes_1 = __importDefault(require("./Routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: [Config_1.default.frontEndUrl, Config_1.default.frontEndUrlDevelopment], credentials: true }));
app.get("/", (_, res) => {
    res.send("Server is perfectly running on port:5000.");
});
app.use("/api/v1", Routes_1.default);
app.use(globalErrorHandler_1.default);
app.use((_, res) => {
    res
        .status(404)
        .send({ success: false, statusCode: 404, message: "Not Found" });
});
exports.default = app;
