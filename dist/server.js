"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
function initialize() {
    const server = express_1.default();
    const options = {
        info: {
            title: 'Xalendar Official API Docs',
            version: '1.0.0',
            description: 'Happy Hacking!',
        },
        servers: [
            {
                url: 'https://xalendar.herokuapp.com',
            },
        ],
        apis: ['./routes/*.js'],
    };
    const specs = swagger_jsdoc_1.default(options);
    server.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    server.use(express_1.default.json());
    server.listen(process.env.PORT || 3000, () => {
        console.log('Server has been started');
    });
    server.use(router_1.router);
    return server;
}
exports.initialize = initialize;
