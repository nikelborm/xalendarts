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
exports.setCurrentEvent = exports.deleteCurrentEvent = exports.updateCurrentEvent = exports.selectEvents = exports.selectCurrentEvent = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const event_1 = require("../db/models/event");
function selectCurrentEvent(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = yield event_1.Event.findOne({
            where: {
                id: {
                    [sequelize_1.Op.eq]: id,
                },
            },
        });
        return event;
    });
}
exports.selectCurrentEvent = selectCurrentEvent;
function selectEvents(id, startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield event_1.Event.findAll({
            where: {
                module_id: {
                    [sequelize_1.Op.eq]: id,
                },
                start_date: {
                    [sequelize_1.Op.gte]: Date.parse(startDate),
                },
                end_date: {
                    [sequelize_1.Op.lte]: Date.parse(endDate),
                },
            },
        });
        return events;
    });
}
exports.selectEvents = selectEvents;
function updateCurrentEvent(id, startTime, endTime, name, color, aud, link, theme) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedEvent = yield event_1.Event.update({
            name: name,
            color: color,
            aud: aud,
            link: link,
            theme: theme,
            start_time: startTime,
            end_time: endTime,
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
function setCurrentEvent(name, color, aud, link, teacher, theme, startTime, endTime, moduleId) {
    return __awaiter(this, void 0, void 0, function* () {
        const newEvent = connection_1.sequelize.query(`INSERT INTO events (name, color, aud, link, teacher, theme, start_date, end_date, module_id)
     VALUES ('${name}', '${color}', '${aud}', '${link}', '${teacher}', '${theme}', '${startTime}', '${endTime}', '${moduleId}') RETURNING id;`);
        return newEvent;
    });
}
exports.setCurrentEvent = setCurrentEvent;
