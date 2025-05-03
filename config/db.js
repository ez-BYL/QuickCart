import mongoose from "mongoose";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose ={conn: null, promise: null}
}
 async function connectDB(params) {
    if (cached.conn){
        return cached.conn
    }
    if (!cached.promise){
        const options = {
            bufferCommands:false
        }
        cached.promise = (await mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, options)).isObjectIdOrHexString(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
 }

 export default connectDB