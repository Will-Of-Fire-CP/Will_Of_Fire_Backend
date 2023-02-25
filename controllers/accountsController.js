const accountModel = require("../models/accountModel.js")
const bcrypt = require("bcrypt");

const createAcount = async (req, res) => {
    try {
        let { user_name, useremail, password } = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const register = await accountModel.createAcountDB(user_name, useremail, hashedPassword)
        register[0].acount_created = true
        res.send(register[0]);
    } catch (err) {
        res.send({ acount_created : false});
    }
}

const login = async (req, res) => {
    let { user_name, password } = req.body;
    const nameExist = await accountModel.getUserDataDB(user_name)

    if (nameExist.length < 1) {
        res.status(400).json({ message: "Cannot find User" });
    } else {
        const user = nameExist[0];
        const passCheck = await bcrypt.compare(password, user.user_password);
        if (!passCheck) {
            res.status(400).json({ message: "Password is incorrect" });
        } else {
            user.message = "login confirmed"
            res.status(200).json(user)
        }
    }
}

const getUser = async (req, res) => { 
    try {
        let { user_id, search_friend_name } = req.body;
        const userdata = await accountModel.getUserDB(search_friend_name);
        const checkFriendStatus = await accountModel.checkFriendListDB(user_id, userdata[0].user_id)
        console.log(user_id,  checkFriendStatus)
        if (checkFriendStatus) {
            userdata[0].message = "is friend";
            res.status(200).json(userdata[0])
        } else {
            userdata[0].message = "not friend";
            res.status(200).json(userdata[0])
        }
        

    } catch (err) {
        res.status(404).json({ message: "not found" })
     }
}
module.exports = {
    createAcount,
    login,
    getUser
}