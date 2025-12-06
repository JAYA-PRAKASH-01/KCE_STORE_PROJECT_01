import React from "react";
import './Hero.css';

export default function HeroSection() {
  return (
    <main className="hero-wrapper">
      <div className="hero-inner">
        <div className="hero-image-area">
          <div className="dots-wrapper">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <img
            src="https://api.deepai.org/job-view-file/f8c6c8ed-a0d4-491f-a13e-ff2dc38a74cf/outputs/output.jpg"
            alt="Xerox Shop"
            className="hero-img"
          />
        </div>
        <div className="hero-text-area">
          <div className="text-content">
            <h1 className="hero-title">
             Print your ideas, <br /> Share your vision, <br /> Inspire the world.
            </h1>
            <p className="hero-desc">
             “Books & Prints Under One Roof!”
Read, Learn, Print  Everything in One Place.
            </p>
            <button className="readmore-button">GET STARTED</button>
          </div>
          <div className="social-wrapper">
            <i className="fab fa-facebook-f social-icon"></i>
            <i className="fab fa-twitter social-icon"></i>
            <i className="fab fa-instagram social-icon"></i>
          </div>
        </div>
      </div>
    </main>
  );
}