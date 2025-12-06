import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function Login() {
  const navigate = useNavigate();

  const [rollno, setrollno] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");

  useEffect(() => {
    if (status === "") return;
  }, [status]);

  const login = async (e) => {
    e.preventDefault();
    const details = {
      rollno: rollno,
      name: name,
      email: email,
      password: password
    };
    try {
      const r = await axios.post("http://localhost:5004/store/login", details);
      console.log(r.data.msg);
      console.log(r.data.token);

      if (r.data.msg === "success") {
        localStorage.setItem("tokenkey", r.data.token);
        localStorage.setItem("rollno", r.data.rollno);
        localStorage.setItem("name", r.data.name);

        alert("Logged in Successfully");
        navigate('/dashboard');
      } else if (r.data.msg === "invalid") {
        alert("Invalid Password or Email");
      } else {
        alert("No User Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to continue to your account</p>

          <form onSubmit={login} className="login-form">
            <label>Roll Number</label>
            <input
              type="text"
              onChange={(e) => setrollno(e.target.value)}
              placeholder="Enter your Roll Number"
              required
            />

            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your Email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />

            <button type="submit" className="login-btn">Login</button>
            <p className="login-footer">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
