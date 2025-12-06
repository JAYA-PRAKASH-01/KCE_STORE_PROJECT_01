import axios from "axios";
import React, { useState } from "react";
import './FolderUpload.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FolderUpload() {
  const navigate = useNavigate();
  const tokenkey = localStorage.getItem("tokenkey");
  const lrollno = localStorage.getItem("rollno");
  const lname = localStorage.getItem("name");

  const [rollno, setRollno] = useState(lrollno || "");
  const [name, setName] = useState(lname || "");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [deliverytime, setDeliverytime] = useState("");
  const [fileDetails, setFileDetails] = useState([]);
  const [status, setstatus] = useState("");


    useEffect(()=>{
        if(status=="") return;
        if(status=="success"){
            alert("File Uploaded Successfully")
            navigate('/view')
        }else{
            alert("Something went wrong ")
        }
  },[status])

  const addFileDetail = () => {
    setFileDetails([...fileDetails, { file: null, copies: "", color: "", desc: "" }]);
  };

  const handleFileDetailChange = (index, field, value) => {
    const newDetails = [...fileDetails];
    newDetails[index][field] = value;
    setFileDetails(newDetails);
  };

  const savedata = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    fileDetails.forEach((detail) => {
      if (detail.file) {
        formData.append("files", detail.file, detail.file.name);
        formData.append("copies", detail.copies);
        formData.append("color", detail.color);
        formData.append("desc", detail.desc);
      }
    });

    formData.append("rollno", rollno);
    formData.append("name", name);
    formData.append("dept", dept);
    formData.append("year", year);
    formData.append("deliverytime", deliverytime);

    try {
      const r = await axios.post(
        "http://localhost:5004/store/filedetails",
        formData,
        { headers: { Authorization: `Bearer ${tokenkey}` } }
      );
      console.log(r);
      if (r.data.msg === "success") {
          setstatus("success");
        
      }
    } catch (error) {
      console.error("Upload failed", error.response || error.message);
      alert("Upload failed: " + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <div className="folder-upload-container">
      <div className="wrapper">

        <header className="welcome-header">
          <h1>Welcome, {lname}</h1>
          <p>Please fill in your details and upload your files for printing.</p>
        </header>

        <form className="upload-form">

          <div className="input-group">
            <label htmlFor="rollno">Roll Number</label>
            <input
              id="rollno"
              type="text"
              value={rollno}
              onChange={e => setRollno(e.target.value)}
              placeholder="Enter your Roll Number"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="dept">Department</label>
            <select id="dept" value={dept} onChange={e => setDept(e.target.value)} required>
              <option value="" disabled>Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="CSD">CSD</option>
              <option value="CST">CST</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="VLSI">VLSI</option>
              <option value="Civil">Civil</option>
              <option value="MECH">MECH</option>
            </select> 
          </div> 
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <select id="year" value={year} onChange={e => setYear(e.target.value)} required>
              <option value="" disabled>Select Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="deliverytime">Delivery Time:</label>
            <input
              id="deliverytime"
              type="datetime-local"
              value={deliverytime}
              onChange={e => setDeliverytime(e.target.value)}
              required
            />
          </div>

          <section className="files-section">
            <h2>Upload Files Details</h2>

            {fileDetails.map((detail, idx) => (
              <div key={idx} className="file-detail-item">
                <h3>File #{idx + 1}</h3>

                <div className="input-group">
                  <label>File (PDF only)</label>
                  <input
                    type="file"
                    accept="application/pdf"
                    required
                    onChange={e => handleFileDetailChange(idx, "file", e.target.files[0])}
                  />
                </div>

                <div className="input-group">
                  <label>No. of Copies</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="No. of copies"
                    value={detail.copies}
                    required
                    onChange={e => handleFileDetailChange(idx, "copies", e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Print Type</label>
                  <select
                    value={detail.color}
                    required
                    onChange={e => handleFileDetailChange(idx, "color", e.target.value)}
                  >
                    <option value="" disabled>Select Print Type</option>
                    <option value="Black and White">Black and White</option>
                    <option value="Color Print">Color Print</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Additional Details</label>
                  <textarea
                    placeholder="Share your ideas like upto which page no and binding details and binding colors"
                    rows={3}
                    value={detail.desc}
                    onChange={e => handleFileDetailChange(idx, "desc", e.target.value)}
                  />
                </div>
              </div>
            ))}

            <div className="buttons-wrap">
              <button type="button" onClick={addFileDetail} className="add-file-btn">Add Files</button>
              {fileDetails.length > 0 && (
                <button type="submit" onClick={savedata} className="upload-btn">Upload</button>
              )}
            </div>

          </section>

        </form>

      </div>
    </div>
  );
}
