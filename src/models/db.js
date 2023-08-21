import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('systeam', 'root', 'crt123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

// (async () => {
// await sequelize.sync({alter: true});
// })();

export default sequelize;