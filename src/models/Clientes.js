import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

import Pedidos from "./Pedidos.js";

const Clientes = sequelize.define("Clientes", {
    cliente_nome: DataTypes.STRING,
    cliente_contato_01: DataTypes.STRING,
    cliente_cpf: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

// Clientes.hasOne(Pedidos, {
//     foreignKey: {
//       name: 'idClient'
//     }
//   })

export default Clientes;