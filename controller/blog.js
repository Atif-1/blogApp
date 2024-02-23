const Blog=require('../model/blog');

exports.postBlog=(req,res,next)=>{
	const title=req.body.title;
	const author=req.body.author;
	const content=req.body.content;
	console.log(req.body);
	Blog.create({title:title,author:author,content:content}).then((result) => {
		res.status(200).json(result);
	}).catch((err) => {
		console.log(err);
	});
}

exports.getBlog=(req,res,next)=>{
	Blog.findAll().then((blogs)=>{
		res.status(200).json(blogs);
	}).catch((err)=>console.log(err));
}