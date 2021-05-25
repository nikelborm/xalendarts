import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  }
);
