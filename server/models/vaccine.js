const { sequelize, DataTypes } = require("./sequelize");
const ActiveType = sequelize.define(
    "vaccine",
    {
        vaccineCode: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        vaccineManufacturer: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
);
module.exports = ActiveType

