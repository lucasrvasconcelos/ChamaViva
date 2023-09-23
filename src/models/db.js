import 'dotenv/config'
import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Needed to fix sequelize issues with WebPack

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
  });

// const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
//     dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
//     dialect: 'mysql'
// }) // Example for postgres


// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// (async () => {
// await sequelize.sync({alter: true});
// })();

export default sequelize;