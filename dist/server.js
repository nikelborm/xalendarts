"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const cors_1 = __importDefault(require("cors"));
function initialize() {
    const server = express_1.default();
    server.use(cors_1.default());
    server.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    server.use(express_1.default.json());
    server.listen(process.env.PORT || 5000, () => {
        console.log('Server has been started');
    });
    server.use(router_1.router);
    return server;
}
exports.initialize = initialize;
