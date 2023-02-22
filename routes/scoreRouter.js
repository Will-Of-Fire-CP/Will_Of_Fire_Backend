const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreController.js');

router.get('/:id', scoreController.getScore);
router.post('/add_score', scoreController.addScore);

module.exports = router