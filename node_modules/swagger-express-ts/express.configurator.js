"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = void 0;
var express_1 = require("express");
var swagger_service_1 = require("./swagger.service");
var assert = require("assert");
var swagger_builder_1 = require("./swagger.builder");
function express(options) {
    var path = '/api-docs/swagger.json';
    if (options) {
        assert.ok(options.definition, 'Definition is required.');
        if (options.path) {
            path = options.path;
        }
        if (options.definition) {
            swagger_builder_1.build(options.definition);
        }
    }
    var router = buildRouter(path);
    return router;
}
exports.express = express;
function buildRouter(path) {
    var router = express_1.Router();
    router.get(path, function (request, response, next) {
        var data = swagger_service_1.SwaggerService.getInstance().getData();
        response.json(data);
    });
    return router;
}

//# sourceMappingURL=express.configurator.js.map
