"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiOperationPut = void 0;
var swagger_service_1 = require("./swagger.service");
function ApiOperationPut(args) {
    return function (target, propertyKey, descriptor) {
        swagger_service_1.SwaggerService.getInstance().addOperationPut(args, target, propertyKey);
    };
}
exports.ApiOperationPut = ApiOperationPut;

//# sourceMappingURL=api-operation-put.decorator.js.map
