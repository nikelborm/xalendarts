"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModel = void 0;
var swagger_service_1 = require("./swagger.service");
function ApiModel(args) {
    return function (target) {
        swagger_service_1.SwaggerService.getInstance().addApiModel(args, target);
    };
}
exports.ApiModel = ApiModel;

//# sourceMappingURL=api-model.decorator.js.map
