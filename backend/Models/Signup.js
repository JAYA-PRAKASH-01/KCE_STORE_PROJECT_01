const mongoose=require("mongoose")

const dataSchema=mongoose.Schema({
    name:String,
      rollno: String,
    email:String,
    password:String
})

const Signup=mongoose.model("Signupdata",dataSchema);
module.exports=Signup;
