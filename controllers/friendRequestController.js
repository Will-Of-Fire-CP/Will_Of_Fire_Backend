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
    try {
        let { user_id, request_to } = req.body;
        let alreadySent = await friendsRequestModel.checkForFriendRequest(user_id, request_to)
        let hasRequestFromPerson = await friendsRequestModel.checkForFriendRequest(request_to, user_id)
        if (alreadySent[0]) {
            res.send({ message: "friend request already sent" })
        } else if (hasRequestFromPerson[0]) {
            res.send({ message: "person has sent friend request" })
        } else {
            let data = await friendsRequestModel.sendFriendRequest(user_id, request_to)
            res.send(data)
        }
    } catch (error) { 
        res.send({message: "error"})
    }
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