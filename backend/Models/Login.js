const mongoose=require("mongoose")

const dataSchema=mongoose.Schema({
    rollno:String,
    name:String,
    email:String,
    password:String

})

const Login=mongoose.model("Logindata",dataSchema);

module.exports=Login