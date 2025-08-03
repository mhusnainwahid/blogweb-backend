import mongoose from "mongoose"

const mongodb = ()=>{
    try {
        const connectDb = mongoose.connect("mongodb+srv://mhusnainwahid:husnain@cluster0.npabqwn.mongodb.net/")
        console.log("Mongo Db is connect")
    } catch (error) {
        console.log("Mongo Db is not connect", error)
    }

}
export default mongodb



//husnain
//mongodb+srv://mhusnainwahid:husnain@cluster0.npabqwn.mongodb.net/