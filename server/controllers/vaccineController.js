const vaccineDal = require("../dal/vaccine-DB-accessor");
const e = require("express");

class vaccineController {
    //create new vaccine
    createNewVaccine = async (req, res) => {
        const { vaccineManufacturer } = req.body;
        if (!vaccineManufacturer)
            return res.status(400).json({ message: 'All fields are required' })
        const vaccine = await vaccineDal.addNewVaccine(vaccineManufacturer);
        if (!vaccine)
            return res.status(400).json({ message: 'Invalid vaccine data received' })
        return res.status(201).json({ message: 'New vaccine created' })
    }

    //get all vaccines
    getAllVaccines = async (req, res) => {
        const vaccines = await vaccineDal.getAllVaccines();
        if (!vaccines) {
            return res.status(400).json({ message: 'No vaccines found' })
        }
        res.json(vaccines);
    };

    //get vaccine by vaccineCode
    getVaccineByVaccineCode = async (req, res) => {
        const vaccine = await vaccineDal.getVaccineByCode(req.params.vaccineCode);
        if (!vaccine) {
            return res.status(400).json({ message: 'No vaccine found' })
        }
        res.json(vaccine);
    };

}
const vaccinesController = new vaccineController();
module.exports = vaccinesController;