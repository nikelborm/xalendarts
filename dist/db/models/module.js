"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
exports.Module = connection_1.sequelize.define('Model', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: false,
    },
}, {
    tableName: 'modules',
    createdAt: false,
    updatedAt: false,
});
