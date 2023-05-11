const express = require('express')
const router = express.Router()
const memberController = require("../controllers/memberController")

router.route('/')
    .post(memberController.createNewMember)
    .get(memberController.getAllMembers)
router.route('/:memberId')
    .get(memberController.getMemberByMemberId)
module.exports = router