import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const details = { rollno, name, email, password };

    try {
      const res = await axios.post("http://localhost:5004/store/login", details);
      const data = res.data;

      if (data.msg === "success") {
        localStorage.setItem("tokenkey", data.token);
        localStorage.setItem("rollno", data.rollno);
        localStorage.setItem("name", data.name);

        setStatus("Logged in successfully!");
        navigate('/dashboard');
      } else if (data.msg === "invalid") {
        setStatus("Invalid password or email.");
      } else {
        setStatus("No user found.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Login to continue to your account</p>

          <form onSubmit={login} className="login-form">
            <label>Roll Number</label>
            <input
              type="text"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              placeholder="Enter your Roll Number"
              required
            />

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />

            <button type="submit" className="login-btn">Login</button>

            {status && <p className="login-status">{status}</p>}

            <p className="login-footer">
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
