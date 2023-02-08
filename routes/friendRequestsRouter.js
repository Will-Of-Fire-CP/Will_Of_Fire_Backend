const express = require('express');
const router = express.Router();

const friendRequestController = require('../controllers/friendRequestController.js');


router.get('/requests', friendRequestController.gteFriendRequests);

router.get('/requests/:id', friendRequestController.getFriendRequestsByID);

router.post('/send_friend_request', friendRequestController.sendFriendRequest);

router.post('/accept_friend_request', friendRequestController.acceptFriendRequest);

router.delete('/decline', friendRequestController.declineFriendRequest)

module.exports = router