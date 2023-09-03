import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

const ItensPedidos = sequelize.define("ItensPedidos", {
    idPedido:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdProduto:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdCor:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IdTamanho:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ipdQuantidade:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ipdValor:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false
})

export default ItensPedidos;