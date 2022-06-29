const {Router}= require('express');
//import controller
const authcontroller = require('../controller2/authcontroller2');
const router=Router();

//get sign up page
router.get('/signup', authcontroller.signup_get);
//post sign up info
router.post('/signup', authcontroller.signup_post);
//get log in page
router.get('/login', authcontroller.login_get);
//post log in info in another words authenticate a current user
router.post('/login', authcontroller.login_post);
// get req to the server to log out 
outerHeight.get('/logout', authcontroller.logout_get);

module.exports=router;
