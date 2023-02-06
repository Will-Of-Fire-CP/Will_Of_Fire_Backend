const express = require('express');
const router = express.Router();

const friendRequestController = require('../controllers/friendRequestController.js');


router.get('/requests', friendRequestController.gteFriendRequests);

module.exports = router