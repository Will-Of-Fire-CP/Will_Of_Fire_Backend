// const bcrypt = require("bcrypt");
const friendsRequestMode = require("../models/friendsRequestMode")

const gteFriendRequests = async (req, res) => {
    // try {
        const register = await friendsRequestMode.friendRequestDB()
        res.send({register});
    // } catch {
    //     res.status(400).send()
    // }
}
module.exports = {
    gteFriendRequests
}