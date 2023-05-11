const express = require('express')
const router = express.Router()
const vaccinationController = require("../controllers/vaccinationController")

router.route('/')
    .post(vaccinationController.createNewVaccination)
    .get(vaccinationController.getAllVaccinations)
router.route('/:memberId')
    .get(vaccinationController.getAllVaccinationsByMemberId)
module.exports = router