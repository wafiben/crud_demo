const {User}=require('../models/User');

const createUser=async (req,res) => {
	const {age,name}=req.body
	try {
		await User.create({name,age});
		res.status(200).json({msg: "save user is sucessfully done"})
	} catch(error) {
		console.error('Error:',error);
		res.status(500).json({msg: "save is failed"})
	}
}
const readUser=async (req,res) => {
	try {
		const users=await User.findAll()
		res.status(200).json({users})
	} catch(error) {
		res.status(500).json({msg: "get All users is failed"})
	}
}
const findOneUser=async (req,res) => {
	const {id}=req.params
	try {
		const user=await User.findOne({whre: {id: id}})
		res.status(200).json({user})
	} catch {
		res.status(500).json({msg: "get one user is failed"})
	}
}
const deleteUser=async (req,res) => {
	const {id}=req.params
	try {
		const user=await User.findOne({whre: {id: id}});
		await user.destroy();
		res.status(200).json({msg: "delete is sucess"})
	} catch(error) {
		res.status(500).json({msg: "delete one user is failed"})
	}
}
const update=async (req,res) => {
	const {id}=req.params
	const info=req.body
	try {
		const user=await User.update(info,{
			where: {
				id: id
			}
		});
		res.status(200).json({ms:'ok'});
	} catch(error) {
		res.status(500).json({msg: "update failed"})
	}
}
module.exports={
	createUser,
	readUser,
	findOneUser,
	deleteUser,
	update
};