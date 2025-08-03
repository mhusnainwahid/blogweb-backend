import express from "express"
import { createBlog, deleteBlog, getBlog, getSingleBlog, getUserBlog, updateBlog } from "../controller/blog.js"

const BlogRoutes = express.Router()

BlogRoutes.post('/create',createBlog)
BlogRoutes.get('/get',getBlog)
BlogRoutes.delete('/:id',deleteBlog)
BlogRoutes.put('/:id',updateBlog)
BlogRoutes.get('/:id',getSingleBlog)
BlogRoutes.get('/getuserblog/:userId',getUserBlog)


export default BlogRoutes