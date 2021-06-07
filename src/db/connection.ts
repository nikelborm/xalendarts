import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.FUCKING_POSTGRES_CREDENTIALS,
  {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // very important
      },
    },
  }
);
