const morbidityDal = require("../dal/morbidity-DB-accessor");
const e = require("express");

class coronaController {
    //create new morbidity
    createNewMorbidity = async (req, res) => {
        const { memberId, positiveDate, recoveryDate } = req.body;
        console.log(memberId, positiveDate, recoveryDate);
        if (!memberId || !positiveDate || !recoveryDate)
            return res.status(400).json({ message: 'All fields are required' })
        const morbidity = await morbidityDal.addNewMorbidity(memberId, positiveDate, recoveryDate)
        if (!morbidity)
            return res.status(400).json({ message: 'Invalid morbidity data received' })
        return res.status(201).json({ message: 'New morbidity created' })
    }

    //get all morbidities
    getAllMorbidityDal = async (req, res) => {
        const morbidities = await morbidityDal.getAllMorbidities();
        if (!morbidities) {
            return res.status(400).json({ message: 'No morbidities found' })
        }
        res.json(morbidities);
    };

    //get morbidity by member id
    getMorbidityByMemberId = async (req, res) => {
        console.log("innnnnnnnnn");
        const morbidity = await morbidityDal.getMorbidityByMemberId(req.params.memberId);
        if (!morbidity) {
            return res.status(400).json({ message: 'No morbidity found' })
        }
        res.json(morbidity);
    };
}
const corona_Controller = new coronaController();
module.exports = corona_Controller;