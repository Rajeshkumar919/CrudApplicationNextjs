import mongoose from "mongoose";
const  connectMongoDb =()=> {

    try{
      mongoose.connnect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.")
    }catch(error){
        console.log(error)
    }
};
export default connectMongoDb;