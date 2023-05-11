const express = require('express')
const router = express.Router()
const morbidityController = require("../controllers/morbidityController")

router.route('/')
    .post(morbidityController.createNewMorbidity)
    .get(morbidityController.getAllMorbidityDal)
router.route('/:memberId')
    .get(morbidityController.getMorbidityByMemberId)
module.exports = router