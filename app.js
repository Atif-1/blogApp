const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const sequelize=require('./util/database');
const Blog=require('./model/blog');
const Comment=require('./model/comment');

const blogRoute=require('./routes/blog');
const commentRoute=require('./routes/comment');

const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


Comment.belongsTo(Blog,{constraints:true,onDelete:'CASCADE'});
Blog.hasMany(Comment);

app.use(blogRoute);
app.use(commentRoute);
sequelize.sync().then((result) => {
	app.listen(7000);
}).catch((err) => {
	console.log(err);
});