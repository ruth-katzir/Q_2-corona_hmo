const db = require('../models/index');
const Vaccination = db.vaccinations;

class vaccinationAccessor {

    //create new vaccination 
    addNewVaccination = async (memberId, vaccineCode, DateOfVaccination) => {
        console.log(memberId, vaccineCode, DateOfVaccination);
        const newVaccination = await Vaccination.create({ memberId, vaccineCode, DateOfVaccination });
        if (!newVaccination) {
            return res.status(400).json({ message: 'Invalid vaccination data received' })
        }
        return newVaccination;
    }

    // get all vaccinations in hmo
    getAllVaccinations = async () => {
        const vaccinations = await Vaccination.findAll({});
        return vaccinations;
    }
    // get all vaccinations by member id
    getAllVaccinationByMemberId = async (memberId) => {
        const vaccination = await Vaccination.findAll({ where: { memberId: memberId } });
        return vaccination;
    }
}
const vaccinationsAccessor = new vaccinationAccessor();
module.exports = vaccinationsAccessor;
