import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Needed to fix sequelize issues with WebPack

const sequelize = new Sequelize('systeam', 'root', '1234', {
    host: 'localhost',
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
    dialect: 'mysql'
  });

(async () => {
await sequelize.sync({alter: true});
})();

export default sequelize;