import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/route.mjs';
const app= express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://gauravpandey:0gjbUrZLA2gVWIWC@cluster0.4o0ukju.mongodb.net/Portfolio?retryWrites=true&w=majority").then(()=>console.log("database connected")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,()=>{
    console.log("server has started on port: ",8000);
})