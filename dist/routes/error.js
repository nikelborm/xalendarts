"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = void 0;
function getError(msg, type) {
    const plate = {
        message: msg,
        type: type,
    };
    return JSON.stringify(plate);
}
exports.getError = getError;
