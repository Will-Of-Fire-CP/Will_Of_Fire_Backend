const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountsController.js');


router.post('/create_account', accountController.createAcount);
router.post('/login', accountController.login);
// router.post('/newscore')

module.exports = router