const { sequelize, DataTypes } = require("./sequelize");
const ActiveType = sequelize.define(
    "morbidity",
    {
        memberId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        positiveDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        recoveryDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
);
module.exports = ActiveType

