const express = require('express')
const router = express.Router()
const vaccineController = require("../controllers/vaccineController")

router.route('/')
    .post(vaccineController.createNewVaccine)
    .get(vaccineController.getAllVaccines)
router.route('/:vaccineCode')
    .get(vaccineController.getVaccineByVaccineCode)
module.exports = router