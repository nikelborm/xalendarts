export declare class SwaggerDefinitionConstant {
    static JSON: string;
    static XML: string;
    static ZIP: string;
    static PDF: string;
    static X_WWW_FORM_URLENCODED: string;
    static FORM_DATA: string;
    static TEXT_PLAIN: string;
    static TEXT_HTML: string;
    static PNG: string;
    static GIF: string;
    static JPEG: string;
    static STRING: string;
    static NUMBER: string;
    static INTEGER: string;
    static BOOLEAN: string;
    static ARRAY: string;
    static OBJECT: string;
    static QUERY: string;
    static Produce: {
        FORM_DATA: string;
        GIF: string;
        JPEG: string;
        JSON: string;
        PDF: string;
        PNG: string;
        TEXT_HTML: string;
        TEXT_PLAIN: string;
        XML: string;
        X_WWW_FORM_URLENCODED: string;
        ZIP: string;
    };
    static Scheme: {
        HTTP: string;
        HTTPS: string;
    };
    static Consume: {
        JSON: string;
        XML: string;
    };
    static Model: {
        Property: {
            Format: {
                INT_64: string;
                INT_32: string;
                FLOAT: string;
                DOUBLE: string;
                BYTE: string;
                BINARY: string;
                DATE: string;
                DATE_TIME: string;
                PASSWORD: string;
            };
            ItemType: {
                BOOLEAN: string;
                INTEGER: string;
                NUMBER: string;
                STRING: string;
            };
            Type: {
                ARRAY: string;
                BOOLEAN: string;
                INTEGER: string;
                NUMBER: string;
                OBJECT: string;
                STRING: string;
            };
        };
        Type: {
            OBJECT: string;
            ARRAY: string;
        };
    };
    static Parameter: {
        In: {
            HEADER: string;
            BODY: string;
            FORM_DATA: string;
            PATH: string;
            QUERY: string;
        };
        Type: {
            ARRAY: string;
            BOOLEAN: string;
            INTEGER: string;
            NUMBER: string;
            OBJECT: string;
            STRING: string;
        };
    };
    static Response: {
        Type: {
            ARRAY: string;
            BOOLEAN: string;
            INTEGER: string;
            NUMBER: string;
            OBJECT: string;
            STRING: string;
        };
    };
    static Security: {
        In: {
            HEADER: string;
            QUERY: string;
        };
        Type: {
            API_KEY: string;
            BASIC_AUTHENTICATION: string;
        };
    };
}
