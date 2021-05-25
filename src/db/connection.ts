import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('xcalendar', 'postgres', 'root', {
  host: '185.46.8.56',
  dialect: 'postgres',
});
