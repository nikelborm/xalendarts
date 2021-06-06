"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
exports.Event = connection_1.sequelize.define('Event', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    aud: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
    },
    theme: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    teacher: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    module_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
});
