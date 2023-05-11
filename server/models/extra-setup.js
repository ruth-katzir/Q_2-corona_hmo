const { Console } = require("console");
const { sequelize } = require("./sequelize");


const applyExtraSetup = () => {

  const { member, vaccine, vaccination, morbidity } = sequelize.models;
  vaccination.belongsTo(member, { foreignKey: "memberId", as: "memberIDfk" });
  vaccination.belongsTo(vaccine, { foreignKey: "vaccineCode", as: "vaccineCodefk" });
  morbidity.belongsTo(member, { foreignKey: "memberId", as: "memberIdfk" });
};
module.exports = { applyExtraSetup };
