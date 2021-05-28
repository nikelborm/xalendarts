"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var _1 = require(".");
var expect = chai.expect;
describe('SwaggerDefinitionConstant', function () {
    describe('Produce', function () {
        it('expect JSON', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.JSON).exist;
        });
        it('expect XML', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.XML).exist;
        });
        it('expect ZIP', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.ZIP).exist;
        });
        it('expect PDF', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.PDF).exist;
        });
        it('expect X_WWW_FORM_URLENCODED', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.X_WWW_FORM_URLENCODED)
                .exist;
        });
        it('expect FORM_DATA', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.FORM_DATA).exist;
        });
        it('expect TEXT_PLAIN', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.TEXT_PLAIN).exist;
        });
        it('expect TEXT_HTML', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.TEXT_HTML).exist;
        });
        it('expect PNG', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.PNG).exist;
        });
        it('expect GIF', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.GIF).exist;
        });
        it('expect JPEG', function () {
            expect(_1.SwaggerDefinitionConstant.Produce.JPEG).exist;
        });
    });
    describe('Scheme', function () {
        it('expect HTTP', function () {
            expect(_1.SwaggerDefinitionConstant.Scheme.HTTP).exist;
        });
        it('expect HTTPS', function () {
            expect(_1.SwaggerDefinitionConstant.Scheme.HTTPS).exist;
        });
    });
    describe('Model', function () {
        describe('Type', function () {
            it('expect OBJECT', function () {
                expect(_1.SwaggerDefinitionConstant.Model.Type.OBJECT).exist;
            });
            it('expect ARRAY', function () {
                expect(_1.SwaggerDefinitionConstant.Model.Type.ARRAY).exist;
            });
        });
        describe('Property', function () {
            describe('Type', function () {
                expectType(_1.SwaggerDefinitionConstant.Model.Property.Type);
            });
            describe('Format', function () {
                it('expect INT_64', function () {
                    expect(_1.SwaggerDefinitionConstant.Model.Property.Format.INT_64).exist;
                });
            });
        });
    });
    describe('Parameter', function () {
        describe('Type', function () {
            expectType(_1.SwaggerDefinitionConstant.Parameter.Type);
        });
        describe('In', function () {
            it('expect HEADER', function () {
                expect(_1.SwaggerDefinitionConstant.Parameter.In.HEADER).exist;
            });
            it('expect PATH', function () {
                expect(_1.SwaggerDefinitionConstant.Parameter.In.PATH).exist;
            });
            it('expect QUERY', function () {
                expect(_1.SwaggerDefinitionConstant.Parameter.In.QUERY).exist;
            });
            it('expect BODY', function () {
                expect(_1.SwaggerDefinitionConstant.Parameter.In.BODY).exist;
            });
            it('expect FORM_DATA', function () {
                expect(_1.SwaggerDefinitionConstant.Parameter.In.FORM_DATA).exist;
            });
        });
    });
    describe('Response', function () {
        describe('Type', function () {
            expectType(_1.SwaggerDefinitionConstant.Response.Type);
        });
    });
    describe('Security', function () {
        describe('Type', function () {
            it('expect BASIC_AUTHENTICATION', function () {
                expect(_1.SwaggerDefinitionConstant.Security.Type.BASIC_AUTHENTICATION).exist;
            });
            it('expect API_KEY', function () {
                expect(_1.SwaggerDefinitionConstant.Security.Type.API_KEY).exist;
            });
        });
        describe('In', function () {
            it('expect HEADER', function () {
                expect(_1.SwaggerDefinitionConstant.Security.In.HEADER).exist;
            });
            it('expect QUERY', function () {
                expect(_1.SwaggerDefinitionConstant.Security.In.QUERY).exist;
            });
        });
    });
});
function expectType(Type) {
    it('expect STRING', function () {
        expect(Type.STRING).exist;
    });
    it('expect NUMBER', function () {
        expect(Type.NUMBER).exist;
    });
    it('expect INTEGER', function () {
        expect(Type.INTEGER).exist;
    });
    it('expect BOOLEAN', function () {
        expect(Type.BOOLEAN).exist;
    });
    it('expect ARRAY', function () {
        expect(Type.ARRAY).exist;
    });
    it('expect OBJECT', function () {
        expect(Type.OBJECT).exist;
    });
}

//# sourceMappingURL=swagger-definition.constant.spec.js.map
