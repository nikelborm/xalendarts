"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meeting = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
exports.Meeting = connection_1.sequelize.define('Meeting', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    startTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
});
