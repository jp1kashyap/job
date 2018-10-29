var express = require('express');
var router = express.Router();
var userController=require('../controllers/userController');
/* GET users listing. */
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/profile',userController.profile);
router.post('/candidate/profile',userController.candidateProfile);

module.exports = router;
