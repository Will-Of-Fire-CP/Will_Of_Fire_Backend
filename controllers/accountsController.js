const accountMode = require("../models/accountMode.js")
const bcrypt = require("bcrypt");

const createAcount = async (req, res) => {
    try {
        let { user_name, useremail, password } = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const register = await accountMode.createAcountDB(user_name, useremail, hashedPassword)
        register[0].acount_created = true
        res.send(register[0]);
    } catch (err) {
        res.send({ acount_created : false});
    }
}

const login = async (req, res) => {
    let { user_name, password } = req.body;
    const nameExist = await accountMode.getUserDataDB(user_name)

    if (nameExist.length < 1) {
        res.status(400).json({ message: "Cannot find User" });
    } else {
        const user = nameExist[0];
        const passCheck = await bcrypt.compare(password, user.user_password);
        console.log(passCheck)
        if (!passCheck) {
            res.status(400).json({ message: "Password is incorrect" });
        } else {
            user.message = "login confirmed"
            res.status(200).json(user)
        }
    }
}

module.exports = {
    createAcount,
    login
}