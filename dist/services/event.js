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
exports.setCurrentEvent = exports.deleteCurrentEvent = exports.updateCurrentEvent = exports.getRagedEvents = void 0;
const sequelize_1 = require("sequelize");
const event_1 = require("../db/models/event");
function getRagedEvents(userId, startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('type ' + typeof endDate);
        console.log(endDate);
        if (typeof endDate == typeof undefined) {
            const event = yield event_1.Event.findAll({
                where: {
                    date: {
                        [sequelize_1.Op.eq]: startDate,
                    },
                    user_id: {
                        [sequelize_1.Op.contains]: [userId],
                    },
                },
            });
            if (JSON.stringify(event) == '[]') {
                return null;
            }
            else {
                return event;
            }
        }
        const events = yield event_1.Event.findAll({
            where: {
                date: {
                    [sequelize_1.Op.gte]: startDate,
                    [sequelize_1.Op.lte]: endDate,
                },
                user_id: {
                    [sequelize_1.Op.contains]: [userId],
                },
            },
        });
        if (JSON.stringify(events) == '[]') {
            return null;
        }
        else {
            return events;
        }
    });
}
exports.getRagedEvents = getRagedEvents;
function updateCurrentEvent(id, userId, date, startTime, endTime, name, color, aud, link, teacher, moduleName, theme) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedEvent = yield event_1.Event.update({
            name: name,
            color: color,
            aud: aud,
            link: link,
            teacher: teacher,
            module_name: moduleName,
            theme: theme,
            start_time: startTime,
            end_time: endTime,
            date: date,
            user_id: userId,
        }, {
            where: {
                id: {
                    [sequelize_1.Op.eq]: id,
                },
            },
        });
        return updatedEvent;
    });
}
exports.updateCurrentEvent = updateCurrentEvent;
function deleteCurrentEvent(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedEvent = yield event_1.Event.destroy({
            where: {
                id: {
                    [sequelize_1.Op.eq]: eventId,
                },
            },
        });
        return deletedEvent;
    });
}
exports.deleteCurrentEvent = deleteCurrentEvent;
function setCurrentEvent(userId, date, startTime, endTime, name, color, aud, link, teacher, moduleName, theme) {
    return __awaiter(this, void 0, void 0, function* () {
        const newEvent = yield event_1.Event.create({
            name: name,
            color: color,
            aud: aud,
            link: link,
            teacher: teacher,
            module_name: moduleName,
            theme: theme,
            start_time: startTime,
            end_time: endTime,
            date: date,
            user_id: userId,
        }, {
            fields: [
                'name',
                'color',
                'aud',
                'link',
                'teacher',
                'module_name',
                'theme',
                'start_time',
                'end_time',
                'date',
                'user_id',
            ],
        });
        return newEvent;
    });
}
exports.setCurrentEvent = setCurrentEvent;
