"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
function initialize() {
    const server = express_1.default();
    server.use(express_1.default.json());
    server.listen(process.env.PORT, () => {
        console.log('Server has been started');
    });
    server.use(router_1.router);
    return server;
}
exports.initialize = initialize;
