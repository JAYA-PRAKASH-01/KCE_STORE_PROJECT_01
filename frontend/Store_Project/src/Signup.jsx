import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");

  useEffect(() => {
    if (status === "") return;
    if (status === "success") {
      alert("Signed up Successfully");
      navigate('/login');
    } else {
      alert("User already exists");
    }
  }, [status, navigate]);

  const signup = async (e) => {
    e.preventDefault();
    const details = {
      name: name,
      rollno: rollno,
      email: email,
      password: password
    };
    try {
      const r = await axios.post("http://localhost:5004/store/signup", details);
      console.log(r.data.msg);
      setstatus(r.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-page">
   
      <div className="signup-box">
        <h2>Create Account</h2>
        <form>
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your Name"
          />
          <input
            type="text"
            onChange={(e) => setrollno(e.target.value)}
            placeholder="Enter your Roll Number"
          />
          <input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <button onClick={signup}>Signup</button>
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>                                                            
                                                   
    </div>
  );
}
 