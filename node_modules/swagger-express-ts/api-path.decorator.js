"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPath = void 0;
var swagger_service_1 = require("./swagger.service");
function ApiPath(args) {
    return function (target) {
        swagger_service_1.SwaggerService.getInstance().addPath(args, target);
    };
}
exports.ApiPath = ApiPath;

//# sourceMappingURL=api-path.decorator.js.map
