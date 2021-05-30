"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const user_1 = require("./user");
const event_1 = require("./event");
const meeting_1 = require("./meeting");
const router = express_1.default.Router();
exports.router = router;
router.use(express_1.default.static(__dirname + '/templates'));
router.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'templates', 'index.html'));
});
router.get('/user', user_1.getUser);
router.get('/events', event_1.getEvents);
router.get('/meetings', meeting_1.getMeetings);
router.post('/event', event_1.setEvent);
router.patch('/event', event_1.updateEvent);
router.delete('/event', event_1.deleteEvent);
