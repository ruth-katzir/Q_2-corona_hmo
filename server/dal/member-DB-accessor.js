const db = require('../models/index');
const Member = db.members;

class memberAccessor {
    // create new member
    addNewMember = async (memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath) => {
        console.log(memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath);
        const newMember = await Member.create({ memberId, name, city, street, buildingNumber, phoneNumber, cellNumber, DateOfBirth, imgPath });
        if (!newMember) {
            return res.status(400).json({ message: 'Invalid member data received' })
        }
        return newMember;
    }

    //get All members in hmo
    getAllMembers = async () => {
        const members = await Member.findAll({});
        return members;
    }

    //get member by member id
    getMemberByMemberId = async (memberId) => {
        const members = await Member.findOne({ where: { memberId: memberId } });
        return members;
    }
}
const membersAccessor = new memberAccessor();
module.exports = membersAccessor;
