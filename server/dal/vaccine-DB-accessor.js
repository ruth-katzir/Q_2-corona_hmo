const db = require('../models/index');
const Vaccine = db.vaccines;

class vaccineAccessor {
    // create new vaccine
    addNewVaccine = async (vaccineManufacturer) => {
        console.log(vaccineManufacturer);
        const newVaccine = await Vaccine.create({ vaccineManufacturer });
        if (!newVaccine) {
            return res.status(400).json({ message: 'Invalid vaccine data received' })
        }
        return newVaccine;
    }

    //get All vaccines in hmo
    getAllVaccines = async () => {
        const vaccines = await Vaccine.findAll({});
        return vaccines;
    }

    //get vaccine by vaccine code
    getVaccineByCode = async (vaccineCode) => {
        const vaccine = await Vaccine.findOne({ where: { vaccineCode: vaccineCode } });
        return vaccine;
    }
}
const vaccinesAccessor = new vaccineAccessor();
module.exports = vaccinesAccessor;
