const express =require('express');
const router=express.Router();

const trial_controller=require('../controllers/trial_controller');

router.get('/',trial_controller.trial);

module.exports=router;


//we want to access the user_controller using this route
