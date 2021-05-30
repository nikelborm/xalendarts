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
exports.deleteEvent = exports.setEvent = exports.updateEvent = exports.getEvents = void 0;
const error_1 = require("./error");
const event_1 = require("../services/event");
function getEvents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const events = yield event_1.getRagedEvents(req.query.userId, req.query.startDate, req.query.endDate);
        const error = error_1.getError('Not found', '400');
        if (events === null) {
            res.end(error);
        }
        else {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.sendFile(__dirname, '/event.html');
            res.end(JSON.stringify(events));
        }
    });
}
exports.getEvents = getEvents;
function updateEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedEvent = yield event_1.updateCurrentEvent(req.body.id, req.body.userId, req.body.date, req.body.startTime, req.body.endTime, req.body.name, req.body.color, req.body.aud, req.body.link, req.body.teacher, req.body.moduleName, req.body.theme);
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(updatedEvent));
    });
}
exports.updateEvent = updateEvent;
function setEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = yield event_1.setCurrentEvent(req.body.userId, req.body.date, req.body.startTime, req.body.endTime, req.body.name, req.body.color, req.body.aud, req.body.link, req.body.teacher, req.body.moduleName, req.body.theme);
        res.header('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(event));
    });
}
exports.setEvent = setEvent;
function deleteEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedEvent = yield event_1.deleteCurrentEvent(req.query.id);
        if (deletedEvent == 1) {
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.end('{"responce": 1}');
        }
        //res.end(JSON.stringify(deletedEvent));
    });
}
exports.deleteEvent = deleteEvent;
