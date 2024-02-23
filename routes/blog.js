const express=require('express');

const blogController=require('../controller/blog');
const router=express.Router();

router.post('/post-blog',blogController.postBlog);
router.get('/get-blog',blogController.getBlog);

module.exports=router;