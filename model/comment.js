const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const comment=sequelize.define('comments',{
	id:{
		type:Sequelize.INTEGER,
		primaryKey:true,
		allowNull:false,
		autoIncrement:true
	},
	comment:{
		type:Sequelize.STRING,
		allowNull:false
	}
});
module.exports=comment;