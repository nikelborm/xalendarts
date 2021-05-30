import { DataTypes } from 'sequelize';
import { sequelize } from '../connection';

export const Event = sequelize.define(
  'Event',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    module_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },

    meeting_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'events',
    createdAt: false,
    updatedAt: false,
  }
);
