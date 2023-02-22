// const bcrypt = require("bcrypt");
const friendsRequestModel = require("../models/friendsRequestModel")

const gteFriendRequests = async (req, res) => {
    const register = await friendsRequestModel.friendRequestDB()
    res.send(register);
}

const getFriendRequestsByID = async (req, res) => {
    const data = await friendsRequestModel.getFriendRequestsByIDDB(req.params.id)
    res.send(data);
}
const sendFriendRequest = async (req, res) => {
    let { user_id, request_to } = req.body;
    let data = await friendsRequestModel.sendFriendRequest(user_id, request_to)
    res.send(data)
}

const acceptFriendRequest = async (req, res) => {
    let { friend_request_id } = req.body;
    let friendData = await friendsRequestModel.removeFruendRequestDB(friend_request_id)

    let { user_id, request_to_id } = friendData[0]
    let data = await friendsRequestModel.acceptFriendRequestDB(user_id, request_to_id)

    res.send(data)
}

const declineFriendRequest = async (req, res) => {
    let { friend_request_id } = req.body;
    let data = await friendsRequestModel.removeFruendRequestDB(friend_request_id)

    res.send(true)
}

module.exports = {
    gteFriendRequests,
    sendFriendRequest,
    getFriendRequestsByID,
    acceptFriendRequest,
    declineFriendRequest
}