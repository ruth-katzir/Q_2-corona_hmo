const db = require('../models/index');
const Morbidity = db.morbidities;

class morbidityAccessor {
    // create new morbidity
    addNewMorbidity = async (memberId, positiveDate, recoveryDate) => {
        console.log(memberId, positiveDate, recoveryDate);
        const newMorbidity = await Morbidity.create({ memberId, positiveDate, recoveryDate });
        if (!newMorbidity) {
            return res.status(400).json({ message: 'Invalid morbidity data received or this member was already ill' })
        }
        return newMorbidity;
    }

    // get all morbidities in hmo
    getAllMorbidities = async () => {
        const morbidities = await Morbidity.findAll({});
        return morbidities;
    }

    //get morbidity by member id
    getMorbidityByMemberId = async (memberId) => {
        console.log(memberId);
        const morbidity = await Morbidity.findOne({ where: { memberId: memberId } });
        console.log(morbidity);
        return morbidity;
    }
}
const morbidity_Accessor = new morbidityAccessor();
module.exports = morbidity_Accessor;
