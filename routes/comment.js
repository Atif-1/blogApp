const express=require('express');

const commentController=require('../controller/comment');

const router=express.Router();

router.post('/post-comment',commentController.postComment);
router.get('/get-comment/:blogId',commentController.getComment);
router.delete('/delete-comment/:id',commentController.deleteComment);

module.exports=router;