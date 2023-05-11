const { sequelize, DataTypes } = require("./sequelize");
const ActiveType = sequelize.define(
    "vaccination",
    {
        memberId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        vaccineCode: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        DateOfVaccination: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
);
module.exports = ActiveType

