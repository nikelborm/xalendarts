"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerDefinitionConstant = void 0;
var SwaggerDefinitionConstant = /** @class */ (function () {
    function SwaggerDefinitionConstant() {
    }
    SwaggerDefinitionConstant.JSON = 'application/json';
    SwaggerDefinitionConstant.XML = 'application/xml';
    SwaggerDefinitionConstant.ZIP = 'application/zip';
    SwaggerDefinitionConstant.PDF = 'application/pdf';
    SwaggerDefinitionConstant.X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded';
    SwaggerDefinitionConstant.FORM_DATA = 'multipart/form-data';
    SwaggerDefinitionConstant.TEXT_PLAIN = 'text/plain';
    SwaggerDefinitionConstant.TEXT_HTML = 'text/html';
    SwaggerDefinitionConstant.PNG = 'image/png';
    SwaggerDefinitionConstant.GIF = 'image/gif';
    SwaggerDefinitionConstant.JPEG = 'image/jpeg';
    SwaggerDefinitionConstant.STRING = 'string';
    SwaggerDefinitionConstant.NUMBER = 'number';
    SwaggerDefinitionConstant.INTEGER = 'integer';
    SwaggerDefinitionConstant.BOOLEAN = 'boolean';
    SwaggerDefinitionConstant.ARRAY = 'array';
    SwaggerDefinitionConstant.OBJECT = 'object';
    SwaggerDefinitionConstant.QUERY = 'query';
    SwaggerDefinitionConstant.Produce = {
        FORM_DATA: SwaggerDefinitionConstant.FORM_DATA,
        GIF: SwaggerDefinitionConstant.GIF,
        JPEG: SwaggerDefinitionConstant.JPEG,
        JSON: SwaggerDefinitionConstant.JSON,
        PDF: SwaggerDefinitionConstant.PDF,
        PNG: SwaggerDefinitionConstant.PNG,
        TEXT_HTML: SwaggerDefinitionConstant.TEXT_HTML,
        TEXT_PLAIN: SwaggerDefinitionConstant.TEXT_PLAIN,
        XML: SwaggerDefinitionConstant.XML,
        X_WWW_FORM_URLENCODED: SwaggerDefinitionConstant.X_WWW_FORM_URLENCODED,
        ZIP: SwaggerDefinitionConstant.ZIP,
    };
    SwaggerDefinitionConstant.Scheme = {
        HTTP: 'http',
        HTTPS: 'https',
    };
    SwaggerDefinitionConstant.Consume = {
        JSON: SwaggerDefinitionConstant.JSON,
        XML: SwaggerDefinitionConstant.XML,
    };
    SwaggerDefinitionConstant.Model = {
        Property: {
            Format: {
                INT_64: 'int64',
                INT_32: 'int32',
                FLOAT: 'float',
                DOUBLE: 'double',
                BYTE: 'byte',
                BINARY: 'binary',
                DATE: 'date',
                DATE_TIME: 'date-time',
                PASSWORD: 'password'
            },
            ItemType: {
                BOOLEAN: SwaggerDefinitionConstant.BOOLEAN,
                INTEGER: SwaggerDefinitionConstant.INTEGER,
                NUMBER: SwaggerDefinitionConstant.NUMBER,
                STRING: SwaggerDefinitionConstant.STRING,
            },
            Type: {
                ARRAY: SwaggerDefinitionConstant.ARRAY,
                BOOLEAN: SwaggerDefinitionConstant.BOOLEAN,
                INTEGER: SwaggerDefinitionConstant.INTEGER,
                NUMBER: SwaggerDefinitionConstant.NUMBER,
                OBJECT: SwaggerDefinitionConstant.OBJECT,
                STRING: SwaggerDefinitionConstant.STRING,
            },
        },
        Type: {
            OBJECT: SwaggerDefinitionConstant.OBJECT,
            ARRAY: SwaggerDefinitionConstant.ARRAY,
        },
    };
    SwaggerDefinitionConstant.Parameter = {
        In: {
            HEADER: 'header',
            BODY: 'body',
            FORM_DATA: 'formData',
            PATH: 'path',
            QUERY: SwaggerDefinitionConstant.QUERY,
        },
        Type: {
            ARRAY: SwaggerDefinitionConstant.ARRAY,
            BOOLEAN: SwaggerDefinitionConstant.BOOLEAN,
            INTEGER: SwaggerDefinitionConstant.INTEGER,
            NUMBER: SwaggerDefinitionConstant.NUMBER,
            OBJECT: SwaggerDefinitionConstant.OBJECT,
            STRING: SwaggerDefinitionConstant.STRING,
        },
    };
    SwaggerDefinitionConstant.Response = {
        Type: {
            ARRAY: SwaggerDefinitionConstant.ARRAY,
            BOOLEAN: SwaggerDefinitionConstant.BOOLEAN,
            INTEGER: SwaggerDefinitionConstant.INTEGER,
            NUMBER: SwaggerDefinitionConstant.NUMBER,
            OBJECT: SwaggerDefinitionConstant.OBJECT,
            STRING: SwaggerDefinitionConstant.STRING,
        },
    };
    SwaggerDefinitionConstant.Security = {
        In: {
            HEADER: 'header',
            QUERY: SwaggerDefinitionConstant.QUERY,
        },
        Type: {
            API_KEY: 'apiKey',
            BASIC_AUTHENTICATION: 'basic',
        },
    };
    return SwaggerDefinitionConstant;
}());
exports.SwaggerDefinitionConstant = SwaggerDefinitionConstant;

//# sourceMappingURL=swagger-definition.constant.js.map
