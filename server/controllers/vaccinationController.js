const vaccinationDal = require("../dal/vaccination-DB-accessor");
const e = require("express");

class vaccinationController {
    //create new vaccination
    createNewVaccination = async (req, res) => {
        const { memberId, vaccineCode, dateOfVaccination } = req.body;
        console.log(memberId, vaccineCode, dateOfVaccination);
        if (!memberId || !vaccineCode || !dateOfVaccination)
            return res.status(400).json({ message: 'All fields are required' })
        const vaccination = await vaccinationDal.addNewVaccination(memberId, vaccineCode, dateOfVaccination)
        if (!vaccination)
            return res.status(400).json({ message: 'Invalid vaccination data received' })
        return res.status(201).json({ message: 'New vaccination created' })
    }

    //get all vaccinations
    getAllVaccinations = async (req, res) => {
        const vaccinations = await vaccinationDal.getAllVaccinations();
        if (!vaccinations) {
            return res.status(400).json({ message: 'No vaccinations found' })
        }
        res.json(vaccinations);
    };

    //get all vaccinations by member id 
    getAllVaccinationsByMemberId = async (req, res) => {
        const vaccinations = await vaccinationDal.getAllVaccinationByMemberId(req.params.memberId);
        if (!vaccinations) {
            return res.status(400).json({ message: 'No vaccinations found' })
        }
        res.json(vaccinations);
    };

}
const vaccinationsController = new vaccinationController();
module.exports = vaccinationsController;