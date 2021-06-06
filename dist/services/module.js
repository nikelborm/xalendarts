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
exports.updateUsers = exports.destroyModule = exports.selectModules = exports.getModuleById = exports.insertModule = void 0;
const sequelize_1 = require("sequelize");
const module_1 = require("../db/models/module");
function insertModule(name, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const newModule = yield module_1.Module.create({
            name: name,
            user_id: userId,
        }, {
            fields: ['name', 'user_id'],
        });
        return newModule;
    });
}
exports.insertModule = insertModule;
function getModuleById(moduleId) {
    return __awaiter(this, void 0, void 0, function* () {
        const module = yield module_1.Module.findOne({
            where: {
                id: {
                    [sequelize_1.Op.eq]: moduleId,
                },
            },
        });
        return JSON.stringify(module);
    });
}
exports.getModuleById = getModuleById;
function selectModules(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof userId == typeof undefined) {
            const modules = yield module_1.Module.findAll();
            return modules;
        }
        else {
            const modules = yield module_1.Module.findAll({
                where: {
                    user_id: {
                        [sequelize_1.Op.contains]: [userId], // ! - non-null
                    },
                },
            });
            return modules;
        }
    });
}
exports.selectModules = selectModules;
function destroyModule(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteModule = yield module_1.Module.destroy({
            where: {
                id: {
                    [sequelize_1.Op.eq]: id,
                },
            },
        });
        return deleteModule;
    });
}
exports.destroyModule = destroyModule;
function updateUsers(id, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedModule = yield module_1.Module.update({
            user_id: sequelize_1.Sequelize.fn('array_append', sequelize_1.Sequelize.col('user_id'), user_id),
        }, {
            where: {
                id: {
                    [sequelize_1.Op.eq]: id,
                },
            },
        });
        return updatedModule;
    });
}
exports.updateUsers = updateUsers;
