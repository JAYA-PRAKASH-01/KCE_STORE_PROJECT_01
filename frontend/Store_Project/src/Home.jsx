import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Footer from "./Components/Footer";
import './Home.css';

export default function Home() {
  return (
    <div className="home-wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="content-container">
         <Navbar />
        <Hero/>
        <Footer />
      </div>
    </div>
  );
}