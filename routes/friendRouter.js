const express = require('express');
const router = express.Router();

const friendRequestController = require('../controllers/friendController.js');

router.get('/:id', friendRequestController.getFriendByID);

module.exports = router