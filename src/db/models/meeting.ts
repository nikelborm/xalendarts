import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export const Meeting = sequelize.define(
  'Meeting',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    startTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    endTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
  }
);
