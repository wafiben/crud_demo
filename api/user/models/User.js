const {Sequelize,DataTypes}=require('sequelize');
/*const sequelize=new Sequelize('sqlite::memory:');*/

const sequelize=new Sequelize('sell','root','wafibenjeddou',{
	host: 'localhost',
	dialect: 'mysql',
});

const User=sequelize.define('User',{
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	}
});
const createTable=async () => {
	try {
		await User.sync();
		console.log('Table is created');
	} catch(error) {
		console.error('Error creating table:',error);
	}
};

module.exports={User,createTable};