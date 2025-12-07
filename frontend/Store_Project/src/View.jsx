import axios from "axios";
import React, { useState } from "react";
import "./View.css";

export default function View() {
  const [filedata, setFiledata] = useState([]);
  const [load, setLoad] = useState(false);

  const tokenkey = localStorage.getItem("tokenkey");

  const fetchFiles = async () => {
    try {
      const r = await axios.get("http://localhost:5004/store/getdata", {
        headers: { Authorization: `Bearer ${tokenkey}` },
      });

      setFiledata(r.data.records || []);
    } catch (err) {
      console.error(err);
      setFiledata([]);
    }
  };

  return (
    <div className="view-page">
      <div className="view-box">
        <h2>Your Uploaded Files</h2>

        <button
          onClick={() => {
            setLoad(true);
            fetchFiles();
          }}
        >
          Load Files
        </button>

        {load && (
          <div className="table-container">
            <table className="view-table">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Dept</th>
                  <th>Year</th>
                  <th>Files</th>
                  <th>Copies</th>
                  <th>Color</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {filedata.length > 0 ? (
                  filedata.map((item, i) => (
                    <tr key={i}>
                      <td>{item.rollno}</td>
                      <td>{item.name}</td>
                      <td>{item.dept}</td>
                      <td>{item.year}</td>
                      <td>{item.files.join(", ")}</td>
                      <td>{item.copies.join(", ")}</td>
                      <td>{item.color.join(", ")}</td>
                      <td>{item.desc.join(", ")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No files found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
