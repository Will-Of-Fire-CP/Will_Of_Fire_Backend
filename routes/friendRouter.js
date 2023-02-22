const express = require('express');
const router = express.Router();

const friendRequestController = require('../controllers/friendController.js');

router.get('/:id', friendRequestController.getFriendByID);
router.post('/remove_friend', friendRequestController.removeFriend);

module.exports = router