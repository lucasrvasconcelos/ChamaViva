import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

import ItensPedidos from "./ItensPedido.js";

const Pedidos = sequelize.define("Pedidos", {
    idClient:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorTotal: DataTypes.FLOAT
}, {
    timestamps: false
})

Pedidos.hasOne(ItensPedidos, {
  foreignKey: {
    name: 'idPedido'
  }
})

export default Pedidos;