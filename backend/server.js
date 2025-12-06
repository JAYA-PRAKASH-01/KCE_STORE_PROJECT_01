const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const parser=require("body-parser")
const dotenv=require("dotenv")
const multer=require("multer")
const path=require("path")
const router=require("./Router/StoreRouter")
dotenv.config();

const app=express(); 
app.use(cors({ origin: "http://localhost:5173" }));
app.use(parser.json());
 
app.use("/store",router)



app.use("/Uploads",express.static(path.join(__dirname,"Uploads")))
 

const port=process.env.PORT; 
const mongo=process.env.MONGO_URL;
mongoose.connect(mongo) 
.then(()=>console.log("Mongodb Connected")
).catch((err)=>console.log(err)
) 
app.listen(port,()=>{
    console.log("server started at ",port); 
})  


