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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.setEvent = exports.updateEvent = exports.getEvents = exports.getEvent = void 0;
const module_1 = require("../services/module");
const moment_1 = __importDefault(require("moment"));
const event_1 = require("../services/event");
function getEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const event = yield event_1.selectCurrentEvent(req.params.id);
        if (event === null) {
            res.status(404).end();
        }
        else {
            res.end(JSON.stringify(event));
        }
    });
}
exports.getEvent = getEvent;
function getEvents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const events = [];
        const modules = yield module_1.selectModules(req.query.userId);
        for (let module of JSON.parse(JSON.stringify(modules))) {
            const eventArray = yield event_1.selectEvents(module.id, req.query.startDate, req.query.endDate);
            if (JSON.stringify({}) === JSON.stringify(eventArray)) {
                return;
            }
            else {
                JSON.parse(JSON.stringify(eventArray)).forEach((event) => {
                    const startDate = event.start_date;
                    event['start_date'] = moment_1.default(startDate).toISOString();
                    const endDate = event.end_date;
                    event['end_date'] = moment_1.default(endDate).toISOString();
                    events.push(event);
                });
            }
        }
        res.end(JSON.stringify(events));
    });
}
exports.getEvents = getEvents;
function updateEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const updatedEvent = yield event_1.updateCurrentEvent(req.params.id, req.body.startTime, req.body.endTime, req.body.name, req.body.color, req.body.aud, req.body.link, req.body.theme);
        if (JSON.stringify(updatedEvent) == JSON.stringify([1])) {
            const event = yield event_1.selectCurrentEvent(req.params.id);
            res.end(JSON.stringify(event));
        }
        else {
            res.status(404).end();
        }
    });
}
exports.updateEvent = updateEvent;
function setEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const newEvent = yield event_1.setCurrentEvent(req.body.name, req.body.color, req.body.aud, req.body.link, req.body.teacher, req.body.theme, req.body.startTime, req.body.endTime, req.params.id);
        const id = JSON.parse(JSON.stringify(newEvent))[0][0].id;
        res
            .status(201)
            .location(`/event/${id}`)
            .end(JSON.stringify({ id: id }));
    });
}
exports.setEvent = setEvent;
function deleteEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const deletedEvent = yield event_1.deleteCurrentEvent(req.params.id);
        if (deletedEvent == 1) {
            res.status(204).end(JSON.stringify({}));
        }
        else {
            res.status(404).end();
        }
        //res.end(JSON.stringify(deletedEvent));
    });
}
exports.deleteEvent = deleteEvent;
