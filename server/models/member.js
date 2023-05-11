const { sequelize, DataTypes } = require('./sequelize')
const Member = sequelize.define(
  "member",
  {
    memberId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    buildingNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cellNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    //Bonus
    imgPath: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false,
  }
);
module.exports = Member
