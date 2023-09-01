import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

const Pedidos = sequelize.define("Pedidos", {
    id:{
        DataTypes: NUMBER,
        allowNull: false
    },
    Produtos_valor: DataTypes.FLOAT
}, {
    timestamps: false
})

export default Produtos;