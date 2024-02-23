const Comment=require('../model/comment');

exports.postComment=(req,res,next)=>{
	const comment=req.body.comment;
	const blogId=req.body.blogId;
	Comment.create({comment:comment,blogId:blogId}).then((result) => {
		res.status(202).json(result);
	}).catch((err) => {
		console.log(err);
	});
}
exports.getComment=(req,res,next)=>{
	const blogId=req.params.blogId;
	Comment.findAll({where:{blogId:blogId}}).then((result) => {
		res.status(202).json(result);
	}).catch((err) => {
		console.log(err);
	});
}
exports.deleteComment=(req,res,next)=>{
	const commentId=req.params.id;
	Comment.destroy({where:{id:commentId}});
	res.status(200);
}