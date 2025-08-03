import { model, Schema } from "mongoose";

const blogSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    title:{
        type: String
    },
    category:{
        type: String
    },
    imageUrl:{
        type: String
    },
    article:{
        type: String
    },
    userId:{
        type : String
    }
})

const Blogs = model("blogs",blogSchema)
export default Blogs