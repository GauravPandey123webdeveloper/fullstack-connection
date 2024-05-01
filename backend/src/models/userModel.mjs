import mongoose from 'mongoose';
const userSchema= new mongoose.Schema({
    username:String,
    userpass:String
},{timestamps:true});
export default mongoose.model("user",userSchema);