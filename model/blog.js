const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Blog=sequelize.define('blog',
{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  author:Sequelize.STRING,
  content:{
    type:Sequelize.STRING,
  }
});
module.exports=Blog;