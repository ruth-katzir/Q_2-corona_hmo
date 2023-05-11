const memberDal = require("../dal/member-DB-accessor");
const e = require("express");
const { NUMBER } = require("sequelize");

class schedulesController {
    //create new member
    createNewMember = async (req, res) => {
        const { memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath } = req.body;
        console.log(memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath);
        if (!memberId || !name || !city || !street || !buildingNumber || !phoneNumber || !cellNumber || !DateOfBirth)
            return res.status(400).json({ message: 'All fields are required' })
        const member = await memberDal.addNewMember(memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath)
        if (!member)
            return res.status(400).json({ message: 'Invalid member data received' })
        return res.status(201).json({ message: 'New member created' })
    }

    // get all members
    getAllMembers = async (req, res) => {
        const members = await memberDal.getAllMembers();
        if (!members?.length) {
            return res.status(400).json({ message: 'No members found' })
        }
        res.json(members);
    };

    //get member by member id
    getMemberByMemberId = async (req, res) => {
        const member = await memberDal.getMemberByMemberId(req.params.memberId);
        if (!member) {
            return res.status(400).json({ message: 'No member found' })
        }
        res.json(member);
    };
}
const scheduleController = new schedulesController();
module.exports = scheduleController;