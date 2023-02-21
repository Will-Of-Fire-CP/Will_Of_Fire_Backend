const friendModel = require("../models/friendModel.js")

const getFriendByID = async (req, res) => {
    try {
        console.log(req.params.id)
        let data = await friendModel.getFriendsByID(req.params.id)
        console.log(data)
        res.send(data);

    } catch (err) {
        res.send({ acount_created: false });
    }
}

module.exports = {
    getFriendByID
}