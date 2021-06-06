import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  `postgres://giulymlilntnze:04841c3263c094bd0466037b9161ec19bd8fc88968af9d2f0ce570f0dc492956@ec2-34-242-89-204.eu-west-1.compute.amazonaws.com:5432/d3jdeo06r3s07h?sslmode=require`,
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
