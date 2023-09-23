import sequelize from "./db.js"
import { DataTypes } from 'sequelize';


const Produtos = sequelize.define("Produtos", {
    Produtos_nome: DataTypes.STRING,
    Produtos_valor: DataTypes.FLOAT
}, {
    timestamps: false
})

// Produtos.hasOne(ItensPedidos, {
//     foreignKey: {
//       name: 'IdProduto'
//     }
//   })

export default Produtos;