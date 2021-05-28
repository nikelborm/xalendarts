"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_service_1 = require("./swagger.service");
var chai = require("chai");
var swagger_definition_constant_1 = require("./swagger-definition.constant");
var expect = chai.expect;
describe('SwaggerService', function () {
    beforeEach(function () {
        swagger_service_1.SwaggerService.getInstance().resetData();
        console.log('reset');
    });
    describe('setBasePath', function () {
        it('expect basePath default "/"', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().basePath).to.equal('/');
        });
        it('expect basePath exist when it setted', function () {
            var basePath = '/basepath';
            swagger_service_1.SwaggerService.getInstance().setBasePath(basePath);
            expect(swagger_service_1.SwaggerService.getInstance().getData().basePath).to.equal(basePath);
        });
    });
    describe('setOpenapi', function () {
        it('expect default openapi when it not setted', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().openapi).to.not.exist;
        });
        it('expect openapi exist when it setted', function () {
            var openapi = 'openapi';
            swagger_service_1.SwaggerService.getInstance().setOpenapi(openapi);
            expect(swagger_service_1.SwaggerService.getInstance().getData().openapi).to.equal(openapi);
        });
    });
    describe('setInfo', function () {
        it('expect default info', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().info.title).to.equal('');
            expect(swagger_service_1.SwaggerService.getInstance().getData().info.version).to.equal('');
        });
        it('expect info when it defined', function () {
            var info = {
                title: 'Title',
                version: '1.0.1',
            };
            swagger_service_1.SwaggerService.getInstance().setInfo(info);
            expect(swagger_service_1.SwaggerService.getInstance().getData().info.title).to.equal(info.title);
            expect(swagger_service_1.SwaggerService.getInstance().getData().info.version).to.equal(info.version);
        });
    });
    describe('setSchemes', function () {
        it('expect default schemes when it not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().schemes)
                .to.have.lengthOf(1)
                .to.have.members([swagger_definition_constant_1.SwaggerDefinitionConstant.Scheme.HTTP]);
        });
        it('expect schemes when it defined', function () {
            var schemes = [
                swagger_definition_constant_1.SwaggerDefinitionConstant.Scheme.HTTP,
                swagger_definition_constant_1.SwaggerDefinitionConstant.Scheme.HTTPS,
            ];
            swagger_service_1.SwaggerService.getInstance().setSchemes(schemes);
            expect(swagger_service_1.SwaggerService.getInstance().getData().schemes).to.deep.equal(schemes);
        });
    });
    describe('setExternalDocs', function () {
        it('expect default externalDocs when it not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().externalDocs).to.not
                .exist;
        });
        it('expect externalDocs when it defined', function () {
            var externalDocs = {
                url: 'Mon url',
            };
            swagger_service_1.SwaggerService.getInstance().setExternalDocs(externalDocs);
            expect(swagger_service_1.SwaggerService.getInstance().getData().externalDocs.url).to.equal(externalDocs.url);
        });
    });
    describe('setProduces', function () {
        it('expect default produces when it not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().produces)
                .to.have.lengthOf(1)
                .to.have.members([swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON]);
        });
        it('expect produces when it defined', function () {
            var produces = [
                swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON,
                swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.XML,
            ];
            swagger_service_1.SwaggerService.getInstance().setProduces(produces);
            expect(swagger_service_1.SwaggerService.getInstance().getData().produces).to.deep.equal(produces);
        });
    });
    describe('setConsumes', function () {
        it('expect default consumes when it not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().consumes)
                .to.have.lengthOf(1)
                .to.have.members([swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON]);
        });
        it('expect consumes when it defined', function () {
            var consumes = [
                swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
            ];
            swagger_service_1.SwaggerService.getInstance().setConsumes(consumes);
            expect(swagger_service_1.SwaggerService.getInstance().getData().consumes).to.deep.equal(consumes);
        });
    });
    describe('setHost', function () {
        it('expect host not exist when it not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().host).to.be.not.exist;
        });
        it('expect host when it defined', function () {
            var host = 'host';
            swagger_service_1.SwaggerService.getInstance().setHost(host);
            expect(swagger_service_1.SwaggerService.getInstance().getData().host).to.equal(host);
        });
    });
    describe('setDefinitions', function () {
        it('expect default definitions when they not defined', function () {
            expect(swagger_service_1.SwaggerService.getInstance().getData().definitions).to.deep.equal({});
        });
        it('expect definitions when they defined', function () {
            var models = {
                Version: {
                    properties: {
                        id: {
                            description: 'Id of Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Model.Property.Type
                                .STRING,
                            example: ['123456789'],
                        },
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().setDefinitions(models);
            expect(swagger_service_1.SwaggerService.getInstance().getData().definitions).to.deep.equal({
                Version: {
                    properties: {
                        id: {
                            description: 'Id of Version',
                            example: ['123456789'],
                            type: 'string',
                            enum: undefined,
                            format: undefined,
                        },
                    },
                    required: [],
                    type: 'object',
                },
            });
        });
    });
    describe('addPath', function () {
        it('expect new path', function () {
            var args = {
                path: '/versions',
                name: 'version',
            };
            var target = {
                name: 'MyName',
            };
            swagger_service_1.SwaggerService.getInstance().addPath(args, target);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal({
                '/versions': {},
            });
        });
    });
    describe('addOperationGet', function () {
        var pathArgs = {
            path: '/versions',
            name: 'Version',
        };
        var pathTarget = {
            name: 'VersionsController',
        };
        var operationGetTarget = {
            constructor: {
                name: 'VersionsController',
            },
        };
        var propertyKey;
        var expectedPaths;
        beforeEach(function () {
            swagger_service_1.SwaggerService.getInstance().addPath(pathArgs, pathTarget);
        });
        describe('expect array', function () {
            beforeEach(function () {
                propertyKey = 'getVersions';
                expectedPaths = {
                    '/versions': {
                        get: {
                            consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                            operationId: 'getVersions',
                            produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                            responses: {
                                200: {
                                    description: 'Success',
                                    schema: {
                                        items: {
                                            $ref: '#/definitions/Version',
                                        },
                                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response
                                            .Type.ARRAY,
                                    },
                                },
                            },
                            tags: ['Version'],
                        },
                    },
                };
            });
            it('expect default', function () {
                var operationGetArgs = {
                    responses: {
                        200: {
                            model: 'Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect description', function () {
                var operationGetArgs = {
                    description: 'get versions',
                    responses: {
                        200: {
                            model: 'Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions'].get.description =
                    operationGetArgs.description;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect summary', function () {
                var operationGetArgs = {
                    summary: 'get versions',
                    responses: {
                        200: {
                            model: 'Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions'].get.summary =
                    operationGetArgs.summary;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect consumes', function () {
                var operationGetArgs = {
                    consumes: [
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                    ],
                    responses: {
                        200: {
                            model: 'Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions'].get.consumes =
                    operationGetArgs.consumes;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect produces', function () {
                var operationGetArgs = {
                    produces: [
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON,
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.XML,
                    ],
                    responses: {
                        200: {
                            model: 'Version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions'].get.produces =
                    operationGetArgs.produces;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect responses', function () {
                var operationGetArgs = {
                    responses: {
                        200: {
                            description: 'return version object',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                            model: 'Version',
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions'].get.responses[200].description =
                    operationGetArgs.responses[200].description;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
        });
        describe('expect object', function () {
            beforeEach(function () {
                propertyKey = 'getVersion';
                expectedPaths = {
                    '/versions/{id}': {
                        get: {
                            consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                            operationId: 'getVersion',
                            produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                            responses: {
                                200: {
                                    description: 'Success',
                                    schema: {
                                        $ref: '#/definitions/Version',
                                    },
                                },
                            },
                            tags: ['Version'],
                        },
                    },
                };
            });
            it('expect default', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    responses: {
                        200: { model: 'Version' },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect description', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    description: 'get version',
                    responses: {
                        200: { model: 'Version' },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions/{id}'].get.description =
                    operationGetArgs.description;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect summary', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    summary: 'get version',
                    responses: {
                        200: { model: 'Version' },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions/{id}'].get.summary =
                    operationGetArgs.summary;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect consumes', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    consumes: [
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                    ],
                    responses: {
                        200: { model: 'Version' },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions/{id}'].get.consumes =
                    operationGetArgs.consumes;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect produces', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    produces: [
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON,
                        swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.XML,
                    ],
                    responses: {
                        200: { model: 'Version' },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions/{id}'].get.produces =
                    operationGetArgs.produces;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
            it('expect responses', function () {
                var operationGetArgs = {
                    path: '/{id}',
                    responses: {
                        200: {
                            description: 'return version object',
                            model: 'Version',
                        },
                    },
                };
                swagger_service_1.SwaggerService.getInstance().addOperationGet(operationGetArgs, operationGetTarget, propertyKey);
                swagger_service_1.SwaggerService.getInstance().buildSwagger();
                expectedPaths['/versions/{id}'].get.responses[200].description =
                    operationGetArgs.responses[200].description;
                expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
            });
        });
    });
    describe('addOperationPost', function () {
        var argsPath = {
            path: '/versions',
            name: 'Version',
        };
        var targetPath = {
            name: 'VersionController',
        };
        var targetOperationPost = {
            constructor: {
                name: 'VersionController',
            },
        };
        var propertyKey = 'postVersion';
        var expectedPaths;
        beforeEach(function () {
            swagger_service_1.SwaggerService.getInstance().addPath(argsPath, targetPath);
            expectedPaths = {
                '/versions': {
                    post: {
                        parameters: [
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                description: 'New versions',
                                format: undefined,
                                maximum: undefined,
                                minimum: undefined,
                                in: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                name: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                required: true,
                                schema: {
                                    $ref: '#/definitions/Version',
                                },
                                type: undefined,
                            },
                        ],
                        consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                        operationId: propertyKey,
                        produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                        responses: {
                            200: {
                                description: 'Success',
                                schema: {
                                    items: {
                                        $ref: '#/definitions/Version',
                                    },
                                    type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type
                                        .ARRAY,
                                },
                            },
                        },
                        tags: ['Version'],
                    },
                },
            };
        });
        it('expect default', function () {
            var argsOperationPost = {
                parameters: {
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: {
                        model: 'Version',
                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPost(argsOperationPost, targetOperationPost, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect description', function () {
            var argsOperationPost = {
                description: 'post version',
                parameters: {
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: {
                        model: 'Version',
                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPost(argsOperationPost, targetOperationPost, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions'].post.description =
                argsOperationPost.description;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect summary', function () {
            var argsOperationPost = {
                summary: 'post version',
                parameters: {
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: {
                        model: 'Version',
                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPost(argsOperationPost, targetOperationPost, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions'].post.summary = argsOperationPost.summary;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect consumes', function () {
            var argsOperationPost = {
                consumes: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: {
                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        model: 'Version',
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPost(argsOperationPost, targetOperationPost, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions'].post.consumes =
                argsOperationPost.consumes;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect produces', function () {
            var argsOperationPost = {
                produces: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: {
                        type: swagger_definition_constant_1.SwaggerDefinitionConstant.Response.Type.ARRAY,
                        model: 'Version',
                    },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPost(argsOperationPost, targetOperationPost, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions'].post.produces =
                argsOperationPost.produces;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
    });
    describe('addOperationPut', function () {
        var argsPath = {
            path: '/versions',
            name: 'Version',
        };
        var targetPath = {
            name: 'VersionController',
        };
        var targetOperationPut = {
            constructor: {
                name: 'VersionController',
            },
        };
        var propertyKey = 'putVersion';
        var expectedPaths;
        beforeEach(function () {
            swagger_service_1.SwaggerService.getInstance().addPath(argsPath, targetPath);
            expectedPaths = {
                '/versions/{id}': {
                    put: {
                        parameters: [
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                in: 'path',
                                format: undefined,
                                description: 'Id of version',
                                maximum: undefined,
                                minimum: undefined,
                                name: 'id',
                                required: true,
                                type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type
                                    .STRING,
                            },
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                description: 'New versions',
                                format: undefined,
                                in: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                maximum: undefined,
                                minimum: undefined,
                                name: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                required: true,
                                schema: {
                                    $ref: '#/definitions/Version',
                                },
                                type: undefined,
                            },
                        ],
                        consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                        operationId: propertyKey,
                        produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                        responses: {
                            200: {
                                description: 'Success',
                                schema: {
                                    $ref: '#/definitions/Version',
                                },
                            },
                        },
                        tags: ['Version'],
                    },
                },
            };
        });
        it('expect default', function () {
            var argsOperationPut = {
                path: '/{id}',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPut(argsOperationPut, targetOperationPut, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect description', function () {
            var argsOperationPut = {
                path: '/{id}',
                description: 'post version',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPut(argsOperationPut, targetOperationPut, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].put.description =
                argsOperationPut.description;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect summary', function () {
            var argsOperationPut = {
                path: '/{id}',
                summary: 'post version',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPut(argsOperationPut, targetOperationPut, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].put.summary =
                argsOperationPut.summary;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect consumes', function () {
            var argsOperationPut = {
                path: '/{id}',
                consumes: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPut(argsOperationPut, targetOperationPut, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].put.consumes =
                argsOperationPut.consumes;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect produces', function () {
            var argsOperationPut = {
                path: '/{id}',
                produces: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPut(argsOperationPut, targetOperationPut, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].put.produces =
                argsOperationPut.produces;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
    });
    describe('addOperationPatch', function () {
        var argsPath = {
            path: '/versions',
            name: 'Version',
        };
        var targetPath = {
            name: 'VersionController',
        };
        var targetOperationPatch = {
            constructor: {
                name: 'VersionController',
            },
        };
        var propertyKey = 'patchVersionDescription';
        var expectedPaths;
        beforeEach(function () {
            swagger_service_1.SwaggerService.getInstance().addPath(argsPath, targetPath);
            expectedPaths = {
                '/versions/{id}/description': {
                    patch: {
                        parameters: [
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                in: 'path',
                                maximum: undefined,
                                minimum: undefined,
                                description: 'Id of version',
                                format: undefined,
                                name: 'id',
                                required: true,
                                type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type
                                    .STRING,
                            },
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                description: 'New versions',
                                format: undefined,
                                in: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                maximum: undefined,
                                minimum: undefined,
                                name: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.In.BODY,
                                required: true,
                                schema: {
                                    $ref: '#/definitions/Version',
                                },
                                type: undefined,
                            },
                        ],
                        consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                        operationId: propertyKey,
                        produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                        responses: {
                            200: {
                                description: 'Success',
                                schema: {
                                    $ref: '#/definitions/Version',
                                },
                            },
                        },
                        tags: ['Version'],
                    },
                },
            };
        });
        it('expect default', function () {
            var argsOperationPatch = {
                path: '/{id}/description',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPatch(argsOperationPatch, targetOperationPatch, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect description', function () {
            var argsOperationPatch = {
                path: '/{id}/description',
                description: 'patch version description',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPatch(argsOperationPatch, targetOperationPatch, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}/description'].patch.description =
                argsOperationPatch.description;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect summary', function () {
            var argsOperationPatch = {
                path: '/{id}/description',
                summary: 'patch version description',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPatch(argsOperationPatch, targetOperationPatch, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}/description'].patch.summary =
                argsOperationPatch.summary;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect consumes', function () {
            var argsOperationPatch = {
                path: '/{id}/description',
                consumes: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPatch(argsOperationPatch, targetOperationPatch, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}/description'].patch.consumes =
                argsOperationPatch.consumes;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect produces', function () {
            var argsOperationPut = {
                path: '/{id}/description',
                produces: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                    body: {
                        description: 'New versions',
                        required: true,
                        model: 'Version',
                    },
                },
                responses: {
                    200: { model: 'Version' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationPatch(argsOperationPut, targetOperationPatch, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}/description'].patch.produces =
                argsOperationPut.produces;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
    });
    describe('addOperationDelete', function () {
        var argsPath = {
            path: '/versions',
            name: 'Version',
        };
        var targetPath = {
            name: 'VersionController',
        };
        var targetOperationDelete = {
            constructor: {
                name: 'VersionController',
            },
        };
        var propertyKey = 'deleteVersion';
        var expectedPaths;
        beforeEach(function () {
            swagger_service_1.SwaggerService.getInstance().addPath(argsPath, targetPath);
            expectedPaths = {
                '/versions/{id}': {
                    delete: {
                        consumes: [swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON],
                        operationId: propertyKey,
                        parameters: [
                            {
                                allowEmptyValue: undefined,
                                default: undefined,
                                deprecated: undefined,
                                in: 'path',
                                format: undefined,
                                description: 'Id of version',
                                maximum: undefined,
                                minimum: undefined,
                                name: 'id',
                                required: true,
                                type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type
                                    .STRING,
                            },
                        ],
                        produces: [swagger_definition_constant_1.SwaggerDefinitionConstant.Produce.JSON],
                        responses: {
                            200: {
                                description: 'Success',
                            },
                        },
                        tags: ['Version'],
                    },
                },
            };
        });
        it('expect default', function () {
            var argsOperationDelete = {
                path: '/{id}',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                },
                responses: {
                    200: { description: 'Success' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationDelete(argsOperationDelete, targetOperationDelete, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect description', function () {
            var argsOperationDelete = {
                path: '/{id}',
                description: 'delete version',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                },
                responses: {
                    200: { description: 'Success' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationDelete(argsOperationDelete, targetOperationDelete, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].delete.description =
                argsOperationDelete.description;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect summary', function () {
            var argsOperationDelete = {
                path: '/{id}',
                summary: 'delete version',
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                },
                responses: {
                    200: { description: 'Success' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationDelete(argsOperationDelete, targetOperationDelete, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].delete.summary =
                argsOperationDelete.summary;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect consumes', function () {
            var argsOperationDelete = {
                path: '/{id}',
                consumes: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                },
                responses: {
                    200: { description: 'Success' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationDelete(argsOperationDelete, targetOperationDelete, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].delete.consumes =
                argsOperationDelete.consumes;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
        it('expect produces', function () {
            var argsOperationDelete = {
                path: '/{id}',
                produces: [
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.JSON,
                    swagger_definition_constant_1.SwaggerDefinitionConstant.Consume.XML,
                ],
                parameters: {
                    path: {
                        id: {
                            description: 'Id of version',
                            type: swagger_definition_constant_1.SwaggerDefinitionConstant.Parameter.Type.STRING,
                            required: true,
                        },
                    },
                },
                responses: {
                    200: { description: 'Success' },
                },
            };
            swagger_service_1.SwaggerService.getInstance().addOperationDelete(argsOperationDelete, targetOperationDelete, propertyKey);
            swagger_service_1.SwaggerService.getInstance().buildSwagger();
            expectedPaths['/versions/{id}'].delete.produces =
                argsOperationDelete.produces;
            expect(swagger_service_1.SwaggerService.getInstance().getData().paths).to.deep.equal(expectedPaths);
        });
    });
});

//# sourceMappingURL=swagger.service.spec.js.map
