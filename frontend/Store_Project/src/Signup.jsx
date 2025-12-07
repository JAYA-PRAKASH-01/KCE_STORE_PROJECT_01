import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    rollno: "",
    email: "",
    password: ""
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success") {
      alert("Signed up successfully!");
      navigate("/login");
    } else if (status === "exists") {
      alert("User already exists");
    }
  }, [status, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5004/store/signup",
        form
      );
      setStatus(res.data.msg);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account</h2>

        <form onSubmit={signup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="rollno"
            placeholder="Roll Number"
            value={form.rollno}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Signup</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
