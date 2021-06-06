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
const module_1 = require("./module");
const router = express_1.default.Router();
exports.router = router;
router.use(express_1.default.static(__dirname + '/templates'));
router.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'templates', 'index.html'));
});
router.get('/user/:userId', user_1.getUser); // +
router.get('/event/:id', event_1.getEvent); // +
router.get('/events', event_1.getEvents); // +
router.get('/modules', module_1.getModules); //+
router.post('/module/:id/event', event_1.setEvent); //+
router.post('/module', module_1.postModule); // +
router.patch('/event/:id', event_1.updateEvent); // +
router.patch('/module/:id/users', module_1.addUsers); // +
router.delete('/module/:id', module_1.deleteModule); //
router.delete('/event/:id', event_1.deleteEvent); // +
