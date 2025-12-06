const Signup=require("../Models/Signup")
const Login=require("../Models/Login")
const FileUpload = require("../Models/FileUpload");
const Token=require("../Utility/Token")
const signupdata=async(req,res)=>{
    const {name,rollno,email,password}=req.body;
    try {
        const r=await Signup.findOne({rollno});
        if(r) return res.json({msg:"exists"});
        const s=await Signup.create({name,rollno,email,password});
        res.json({msg:"success"})
    } catch (error) {
        res.json(error)
    }
    
}


const logindata=async(req,res)=>{
    const {rollno,name,email,password}=req.body;
    try {
        const r=await Signup.findOne({rollno})
        if(r){
            if(r.email==req.body.email && r.password==req.body.password){
                const token=Token(r)
                res.json({msg:"success",token:token,rollno:rollno,name:name})
            }
            else {
                res.json({msg:"invalid"})
            }
        }
        else {
            res.json({msg:"notfound"})
        }
    } catch (error) {
        console.log(error);
        
    }
}

const filedetails = async (req, res) => {
  try {
    const files = req.files.map(f => f.filename);
    const { rollno, name, dept, year, deliveryTime } = req.body;

    const copies = Array.isArray(req.body.copies) ? req.body.copies : [req.body.copies];
    const color = Array.isArray(req.body.color) ? req.body.color : [req.body.color];
    const desc = Array.isArray(req.body.desc) ? req.body.desc : [req.body.desc];

    const record = await FileUpload.create({
      rollno,
      name,
      dept,
      year,
      deliveryTime,
      files,
      copies,
      color,
      desc,
    });

    res.status(201).json({ msg: "success", record });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error });
  }
};

/*const updatedata = async (req, res) => {
  try {
    const files = req.files ? req.files.map(f => f.filename) : [];
    const { rollno, name, dept, year, deliveryTime } = req.body;

    const copies = Array.isArray(req.body.copies) ? req.body.copies : [req.body.copies];
    const color = Array.isArray(req.body.color) ? req.body.color : [req.body.color];
    const desc = Array.isArray(req.body.desc) ? req.body.desc : [req.body.desc];

    const updateFields = {
      name,
      dept,
      year,
      deliveryTime,
      copies,
      color,
      desc,
    };

    if (files.length > 0) {
      updateFields.files = files;
    }

 const record = await FileUpload.findOneAndUpdate(
  { rollno: rollno },
  { $set: updateFields },
  { new: true }
);

    

    if (!record) {
      return res.status(404).json({ msg: "Record not found" }); 
    }

    res.status(200).json({ msg: "success", record });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error });
  }
}


*/

const getdata = async (req, res) => {
  try {
    const { lrollno } = req.query;  // get roll number from query params
    if (!lrollno) {
      return res.status(400).json({ msg: 'Missing roll number' });
    }
    const r = await FileUpload.find({ rollno: lrollno });  // filter by roll number
    res.json({ msg: 'success', record: r });
  } catch (error) {
    res.status(500).json({ msg: 'error', error });
  }
}






module.exports={signupdata,logindata,filedetails,getdata}