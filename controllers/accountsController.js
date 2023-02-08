const friendsRequestMode = require("../models/accountMode.js")
const bcrypt = require("bcrypt");

const createAcount = async (req, res) => {
    let { user_name, useremail, password } = req.body
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const register = await friendsRequestMode.createAcountDB(user_name, useremail, hashedPassword)
    res.send(register);
}
const login = async (req, res) => {
    // asdasdasdas
    let { user_name, password } = req.body;

    const nameExist = await friendsRequestMode.getUserDataDB(user_name)
    if (nameExist.length < 1) {
        res.status(400).json({ message: "Cannot find User" });
    } else {
        const user = nameExist[0];
        const passCheck = await bcrypt.compare(password, user.user_password);
        console.log(passCheck)
        if (!passCheck) {
            res.status(400).json({ message: "Password is incorrect" });
        } else {
            res.status(200).json(nameExist)
        }
    }
}

module.exports = {
    createAcount,
    login
}