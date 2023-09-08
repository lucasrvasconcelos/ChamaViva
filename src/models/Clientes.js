import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

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

export default Clientes;