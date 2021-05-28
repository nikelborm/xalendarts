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
exports.getAvaliableMeetings = void 0;
const meeting_1 = require("../db/models/meeting");
const sequelize_1 = require("sequelize");
function getAvaliableMeetings(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const meetings = yield meeting_1.Meeting.findAll({
            attributes: ['name', 'start_time', 'end_time'],
            where: {
                user_id: {
                    [sequelize_1.Op.contains]: [userId],
                },
            },
        });
        if (JSON.stringify(meetings) === '[]') {
            return null;
        }
        else {
            return meetings;
        }
    });
}
exports.getAvaliableMeetings = getAvaliableMeetings;
