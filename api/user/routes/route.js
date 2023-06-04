const express=require('express');
const router=express.Router();
const {createUser,readUser,findOneUser,deleteUser,update}=require('../controllers/User');
router.route('/user')
	.get(readUser)
	.post(createUser);
router.get('/user/:id',findOneUser);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',update);


module.exports=router