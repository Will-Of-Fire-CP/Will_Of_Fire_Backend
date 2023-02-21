const friendModel = require("../models/friendModel.js")

const getFriendByID = async (req, res) => {
    try {
        console.log(req.params.id)
        let data = await friendModel.getFriendsByID(parseInt(req.params.id))
        console.log("data")
        res.send(data);

    } catch (err) {
        console.log(err)
        res.send({ friends: false });
    }
}

module.exports = {
    getFriendByID
}