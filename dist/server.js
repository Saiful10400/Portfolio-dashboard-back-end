"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
function main() {
    try {
        app_1.default.listen(5000, () => {
            console.log("Server is running at 5000 port.");
        });
    }
    catch (err) {
        console.log(err);
    }
}
main();
