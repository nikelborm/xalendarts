"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
var assert = require("assert");
var swagger_service_1 = require("./swagger.service");
function build(buildDefinition) {
    assert.ok(buildDefinition, 'Definition are required.');
    assert.ok(buildDefinition.info, 'Informations are required. Base is { title: "Title of my API", version: "1.0.0"}');
    if (buildDefinition.basePath) {
        swagger_service_1.SwaggerService.getInstance().setBasePath(buildDefinition.basePath);
    }
    if (buildDefinition.openapi) {
        swagger_service_1.SwaggerService.getInstance().setOpenapi(buildDefinition.openapi);
    }
    if (buildDefinition.info) {
        swagger_service_1.SwaggerService.getInstance().setInfo(buildDefinition.info);
    }
    if (buildDefinition.schemes) {
        swagger_service_1.SwaggerService.getInstance().setSchemes(buildDefinition.schemes);
    }
    if (buildDefinition.produces) {
        swagger_service_1.SwaggerService.getInstance().setProduces(buildDefinition.produces);
    }
    if (buildDefinition.consumes) {
        swagger_service_1.SwaggerService.getInstance().setConsumes(buildDefinition.consumes);
    }
    if (buildDefinition.host) {
        swagger_service_1.SwaggerService.getInstance().setHost(buildDefinition.host);
    }
    if (buildDefinition.externalDocs) {
        swagger_service_1.SwaggerService.getInstance().setExternalDocs(buildDefinition.externalDocs);
    }
    if (buildDefinition.securityDefinitions) {
        swagger_service_1.SwaggerService.getInstance().addSecurityDefinitions(buildDefinition.securityDefinitions);
    }
    if (buildDefinition.models) {
        swagger_service_1.SwaggerService.getInstance().setDefinitions(buildDefinition.models);
    }
    if (buildDefinition.responses) {
        swagger_service_1.SwaggerService.getInstance().setGlobalResponses(buildDefinition.responses);
    }
    swagger_service_1.SwaggerService.getInstance().buildSwagger();
}
exports.build = build;

//# sourceMappingURL=swagger.builder.js.map
