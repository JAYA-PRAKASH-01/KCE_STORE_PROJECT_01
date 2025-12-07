import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FolderUpload.css";
import { useNavigate } from "react-router-dom";

export default function FolderUpload() {
  const navigate = useNavigate();
  const tokenkey = localStorage.getItem("tokenkey");
  const lrollno = localStorage.getItem("rollno");
  const lname = localStorage.getItem("name");

  const [rollno, setRollno] = useState(lrollno || "");
  const [name, setName] = useState(lname || "");
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [fileDetails, setFileDetails] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;

    if (status === "success") {
      alert("File Uploaded Successfully");
      navigate("/view");
    } else {
      alert("Something went wrong");
    }
  }, [status]);

  const addFileDetail = () => {
    setFileDetails([
      ...fileDetails,
      { file: null, copies: "", color: "", desc: "" },
    ]);
  };

  const handleChange = (idx, field, value) => {
    const updated = [...fileDetails];
    updated[idx][field] = value;
    setFileDetails(updated);
  };

  const savedata = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    fileDetails.forEach((detail) => {
      if (detail.file) {
        formData.append("files", detail.file);
        formData.append("copies", detail.copies);
        formData.append("color", detail.color);
        formData.append("desc", detail.desc);
      }
    });

    formData.append("rollno", rollno);
    formData.append("name", name);
    formData.append("dept", dept);
    formData.append("year", year);
    formData.append("deliveryTime", deliveryTime);

    try {
      const r = await axios.post(
        "http://localhost:5004/store/filedetails",
        formData,
        { headers: { Authorization: `Bearer ${tokenkey}` } }
      );

      if (r.data.msg === "success") setStatus("success");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed");
    }
  };

  return (
    <div className="folder-upload-container">
      <div className="wrapper">
        <header className="welcome-header">
          <h1>Welcome, {lname}</h1>
          <p>Please upload your files.</p>
        </header>

        <form className="upload-form" onSubmit={savedata}>
          <div className="input-group">
            <label>Roll Number</label>
            <input
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Department</label>
            <select value={dept} onChange={(e) => setDept(e.target.value)}>
              <option disabled value="">Select</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
              <option value="BME">BME</option>
              <option value="AGRI">AGRI</option>
              <option value="FT">FOOD TECH</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="CHEM">CHEMICAL ENGG</option>
            </select>
          </div>

          <div className="input-group">
            <label>Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option disabled value="">Select</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div className="input-group">
            <label>Delivery Time</label>
            <input
              type="datetime-local"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </div>

        <div class="upload-wrapper">
  <h2 class="page-title">Upload Files</h2>

  <div class="upload-container">
    <div class="upload-title">File #1</div>

    <label class="file-input-box">
      Choose PDF File
      <input type="file" hidden />
    </label>

    <div class="form-row">
      <input type="number" placeholder="Copies" />

      <select>
        <option>Select</option>
        <option>Color</option>
        <option>Black & White</option>
      </select>

      <textarea placeholder="Description"></textarea>
    </div>
  </div>

  <button class="btn btn-add">Add File</button>
  <button class="btn btn-upload">Upload</button>
</div>

        </form>
      </div>
    </div>
  );
}
