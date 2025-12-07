import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [files, setFiles] = useState([]);
  const token = localStorage.getItem("tokenkey");
  const roll = localStorage.getItem("rollno");

  useEffect(() => {
    if (roll !== "A100") {
      alert("Access denied!");
      window.location.href = "/login";
      return;
    }
    fetchAllFiles();
  }, []);

  const fetchAllFiles = async () => {
    try {
      const r = await axios.get("http://localhost:5004/store/admin/allfiles", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setFiles(r.data.records || []);
    } catch (err) {
      console.error("Error fetching admin files:", err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <h3>Total Uploaded Records: {files.length}</h3>

      <div className="table-wrapper">
        <table className="admin-table">
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
            {files.length > 0 ? (
              files.map((item, i) => (
                <tr key={i}>
                  <td>{item.rollno}</td>
                  <td>{item.name}</td>
                  <td>{item.dept}</td>
                  <td>{item.year}</td>

                  <td>
                    {item.files.map((f, index) => (
                      <div key={index}>
                        <a
                          href={`http://localhost:5004/uploads/${f}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {f}
                        </a>
                      </div>
                    ))}
                  </td>

                  <td>{item.copies.join(", ")}</td>
                  <td>{item.color.join(", ")}</td>
                  <td>{item.desc.join(", ")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No records available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
