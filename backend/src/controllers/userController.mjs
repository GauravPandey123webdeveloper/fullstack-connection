import userModel from "../models/userModel.mjs";
const getUser= async (req,res)=>{
    try {
    const users=await userModel.find();
    return res.status(200).send({status:"ok",message:users});
    } catch (error) {
        return res.status(500).send({status:"failed",message:error.message})
    }
}
const createUser= async (req,res)=>{
   try {
    const data= req.body;
    const userdata= await userModel.create(data);
    return res.status(201).send({status:"ok",message:userdata});
   } catch (error) {
     return res.status(500).send({status:"failed",message:error.message})
   }
}
export {getUser,createUser};