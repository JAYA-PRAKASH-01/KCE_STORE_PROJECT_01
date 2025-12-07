import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [rollno, setRollno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5004/store/login", { rollno, email, password });
      const data = res.data;

      if (data.msg === "success") {
        localStorage.setItem("tokenkey", data.token);
        localStorage.setItem("rollno", data.rollno);
        localStorage.setItem("name", data.name);
        setStatus("Logged in successfully!");

        if (rollno.toLowerCase() === "a100") { // example admin check
          navigate('/admin');    
        } else {
          navigate('/folderupload'); 
        }

      } else if (data.msg === "invalid") {
        setStatus("Invalid email or password.");
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
          <h2>Welcome Back</h2>
          <form onSubmit={login} className="login-form">
            <input type="text" placeholder="Roll Number" value={rollno} onChange={e => setRollno(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
          </form>
          {status && <p className="status">{status}</p>}
          <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  );
}
