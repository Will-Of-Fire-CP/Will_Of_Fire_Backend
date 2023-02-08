const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountsController.js');


router.post('/create_account', accountController.createAcount);
router.get('/login', accountController.login);


module.exports = router