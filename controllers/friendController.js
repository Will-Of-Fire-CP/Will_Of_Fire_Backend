const friendModel = require("../models/friendModel.js")

const getFriendByID = async (req, res) => {
    try {
        let data = await friendModel.getFriendsByID(parseInt(req.params.id))
        res.send(data);

    } catch (err) {
        res.send({ friends: false });
    }
}
const removeFriend = async (req, res) => { 
    try {
        let { user_id, friend_id } = req.body
        let data = await friendModel.removeFriendDB(user_id, friend_id)
        res.send(data);
    } catch (err) { 
        res.send({message:false})
    }
}


module.exports = {
    getFriendByID,
    removeFriend
}