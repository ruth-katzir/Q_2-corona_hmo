const { Sequelize } = require('sequelize');
const { sequelize } = require('./sequelize');
const { applyExtraSetup } = require('./extra-setup');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
//********************MODELS*************************//

db.members = require('./member');
db.morbidities = require('./morbidity');
db.vaccines = require('./vaccine');
db.vaccinations = require('./vaccination');

//********************END MODELS*********************//
applyExtraSetup();

db.sequelize.sync({ alter: true, force: false }) //check!
    .then(() => {
        console.log('yes re-sync done!')
    })
module.exports = db