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
exports.getMeetings = void 0;
const error_1 = require("./error");
const meeting_1 = require("../services/meeting");
function getMeetings(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const meetings = yield meeting_1.getAvaliableMeetings(req.query.userId);
        const error = error_1.getError(`Couldn't find meetings`, '400');
        if (meetings === null) {
            res.end(error);
        }
        else {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.sendFile('template/meeting.html', { root: __dirname });
            res.end(JSON.stringify(meetings));
        }
    });
}
exports.getMeetings = getMeetings;
