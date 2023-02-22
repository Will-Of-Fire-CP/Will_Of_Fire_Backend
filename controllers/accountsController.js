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
        let { name } = req.params
        const userdata = await accountMode.getUserDB(name);
        userdata[0].message = true;
        res.status(200).json(userdata[0])

    } catch (err) {
        res.status(401).json({ message: false })
     }
}
module.exports = {
    createAcount,
    login,
    getUser
}