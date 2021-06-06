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
exports.addUsers = exports.postModule = exports.deleteModule = exports.getModules = void 0;
const module_1 = require("../services/module");
// return all modules for specified user
function getModules(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const modules = yield module_1.selectModules(req.query.userId);
        res.end(JSON.stringify(modules));
    });
}
exports.getModules = getModules;
// delete exist Module
function deleteModule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const deletedModule = yield module_1.destroyModule(req.params.id);
        if (deletedModule == 1) {
            res.status(204).end(JSON.stringify({}));
        }
        else {
            res.status(404).end();
        }
    });
}
exports.deleteModule = deleteModule;
// create new Module
function postModule(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const module = yield module_1.insertModule(req.body.name, req.body.userId);
        const module_id = JSON.parse(JSON.stringify(module)).id;
        res.status(201).end(JSON.stringify({ id: module_id }));
    });
}
exports.postModule = postModule;
// add users to Module
function addUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.header('Access-Control-Allow-Origin');
        res.header('Content-Type', 'application/json; charset=utf-8');
        const updatedModule = yield module_1.updateUsers(req.params.id, req.body.userId);
        if (JSON.stringify(updatedModule) == JSON.stringify([1])) {
            const module = yield module_1.getModuleById(req.params.id);
            res.status(200).end(JSON.stringify(module));
        }
    });
}
exports.addUsers = addUsers;
