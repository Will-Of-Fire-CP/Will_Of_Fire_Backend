// const bcrypt = require("bcrypt");
const friendsRequestMode = require("../models/friendsRequestMode")

const gteFriendRequests = async (req, res) => {
    const register = await friendsRequestMode.friendRequestDB()
    res.send(register);
}

const getFriendRequestsByID = async (req, res) => {
    const data = await friendsRequestMode.getFriendRequestsByIDDB(req.params.id)
    res.send(data);
}
const sendFriendRequest = async (req, res) => {
    let { user_id, request_to } = req.body;
    let data = await friendsRequestMode.sendFriendRequest(user_id, request_to)
    res.send(data)
}

const acceptFriendRequest = async (req, res) => {
    let { friend_request_id } = req.body;
    let friendData = await friendsRequestMode.removeFruendRequestDB(friend_request_id)

    let { user_id, request_to_id } = friendData[0]
    let data = await friendsRequestMode.acceptFriendRequestDB(user_id, request_to_id)

    res.send(data)
}

const declineFriendRequest = async (req, res) => {
    let { friend_request_id } = req.body;
    let data = await friendsRequestMode.removeFruendRequestDB(friend_request_id)

    res.send(true)
}
module.exports = {
    gteFriendRequests,
    sendFriendRequest,
    getFriendRequestsByID,
    acceptFriendRequest,
    declineFriendRequest
}