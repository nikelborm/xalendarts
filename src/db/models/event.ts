import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../connection';

export const Event = sequelize.define(
  'Event',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    aud: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    link: {
      type: DataTypes.STRING,
    },

    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
  }
);
