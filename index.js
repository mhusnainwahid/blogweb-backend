import express from "express"
import mongodb from "./config/mongodb.js"
import authRoutes from "./routes/auth.js"
import BlogRoutes from "./routes/blog.js"
import cors from 'cors'
import geralRoute from "./routes/general.route.js"

const app = express()

const PORT = 3000

app.use(cors())

mongodb()
app.use(express.json())
app.use('/',authRoutes)
app.use('/',BlogRoutes)
app.use('/',geralRoute)


app.listen(PORT,()=>{
    console.log(`Server is ruuning on Port ${PORT}`)
})