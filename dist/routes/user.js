"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const user_1 = require("../services/user");
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const user = yield user_1.userInfo(req.params.userId);
        if (user === null) {
            res.status(404).end();
        }
        else {
            res.end(JSON.stringify(user));
        }
    });
}
exports.getUser = getUser;
