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
    teacher: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    module_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    theme: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    start_time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: false,
    },
    meeting_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
});
