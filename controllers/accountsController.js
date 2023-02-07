const friendsRequestMode = require("../models/accountMode.js")

const createAcount = async (req, res) => {
    let { user_name, useremail, password } = req.body
    const register = await friendsRequestMode.friendRequestDB()
    res.send(req.body);
} 

module.exports = {
    createAcount
}