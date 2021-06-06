import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export const Module = sequelize.define(
  'Model',
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
  },
  {
    tableName: 'modules',
    createdAt: false,
    updatedAt: false,
  }
);
