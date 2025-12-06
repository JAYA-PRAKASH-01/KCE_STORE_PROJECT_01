import axios from 'axios';
import React, { useState } from 'react';
import './View.css';

export default function View() {
  const [filedata, setfiledata] = useState([]);
  const [check, setcheck] = useState("");
  const tokenkey = localStorage.getItem("tokenkey");
  const lname = localStorage.getItem("name");
  const lrollno = localStorage.getItem("rollno");

  const viewdata = async () => {
    try {
      const r = await axios.get("http://localhost:5004/store/getdata", {
        headers: { Authorization: `Bearer ${tokenkey}` },
        params: { lrollno }
      });
      setfiledata(Array.isArray(r.data.record) ? r.data.record : []);
    } catch (error) {
      console.log(error);
      setfiledata([]);
    }
  };

  const handleViewClick = () => {
    setcheck("view");
    viewdata();
  };

  return (
    <div className="view-page">
      <div className="view-box">
        <h3>
          Your file has been successfully uploaded and is securely stored in our system.  
          You can upload more files if needed or proceed with your next steps.  
          Thank you for using our service!
        </h3>

        <button onClick={handleViewClick}>View Details</button>

        {check === "view" ? (
          <div className="table-container">
            <table className="view-table">
              <thead>
                <tr>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>File Id</th>
                  <th>No of Copies</th>
                  <th>Color</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {filedata.length > 0 ? (
                  filedata.map((item, index) => (
                    <tr key={index}>
                      <td>{item.rollno}</td>
                      <td>{item.name}</td>
                      <td>{item.dept}</td>
                      <td>{item.year}</td>
                      <td>{item.files ? (Array.isArray(item.files) ? item.files.join(", ") : item.files) : ''}</td>
                      <td>{item.copies ? (Array.isArray(item.copies) ? item.copies.join(", ") : item.copies) : ''}</td>
                      <td>{item.color ? (Array.isArray(item.color) ? item.color.join(", ") : item.color) : ''}</td>
                      <td>{item.desc ? (Array.isArray(item.desc) ? item.desc.join(", ") : item.desc) : ''}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center" }}>No file data to display</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="empty-msg">Nothing</h2>
        )}
      </div>
    </div>
  );
}
