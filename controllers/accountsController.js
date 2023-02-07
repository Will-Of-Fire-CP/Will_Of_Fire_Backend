const friendsRequestMode = require("../models/accountMode.js")

const createAcount = async (req, res) => {
    let { user_name, useremail, password } = req.body
    const register = await friendsRequestMode.createAcountDB(user_name, useremail, password)
    res.send(register);
} 

module.exports = {
    createAcount
}