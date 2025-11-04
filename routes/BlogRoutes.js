const express = require('express');
const router = express.Router();
const Blog = require('../models/BlogModels');

router.get('/', Blog.getAllBlogs);
router.post('/', Blog.createBlog);
router.get('/:id', Blog.getBlogById);
router.put('/:id', Blog.updateBlog);
router.delete('/:id', Blog.deleteBlog);

module.exports = router;