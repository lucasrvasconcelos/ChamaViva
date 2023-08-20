import sequelize from "./db.js"
import { DataTypes } from 'sequelize';

const User = sequelize.define("Users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    timestamps: false
})

export default User;