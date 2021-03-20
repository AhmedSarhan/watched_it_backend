const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();
// localhost db
// const sequelize = new Sequelize('testing', 'root', 'myPass', {
//   dialect: 'mysql',
//   host: 'localhost',
// });
// hosted db
const sequelize = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_pass,
  {
    dialect: 'mysql',
    host: process.env.db_server,
  }
);

module.exports = sequelize;
