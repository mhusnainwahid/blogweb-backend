



import express from 'express'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
import { imageUpload } from '../controller/general.controller.js'



const geralRoute = express.Router()


const upload = multer({storage:storage})
geralRoute.post('/image', upload.single('image'), imageUpload)


export default geralRoute