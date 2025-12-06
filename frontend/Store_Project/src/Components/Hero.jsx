import React from "react";
import './Hero.css';
import "./variables.css";

export default function HeroSection() {
  return (
    <main className="hero-wrapper">
      <div className="hero-inner">

        {/* Image Area */}
        <div className="hero-image-area">
          <div className="hero-images-wrapper">
            <img
              src="https://placehold.co/600x400/2a3442/66fcf1?text=PHOTOCOPY+MACHINE" 
              alt="Photocopy Machine"
              className="hero-img"
            />
            <img
              src="https://placehold.co/600x400/1f2833/66fcf1?text=XEROX+SHOP"
              alt="Xerox Shop 2"
              className="hero-img"
            />
          </div>

          {/* Dots */}
          <div className="dots-wrapper">
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Text Area */}
        <div className="hero-text-area">
          <div className="text-content">
            <h1 className="hero-title">
              Print your ideas, <br /> Share your vision, <br /> Inspire the world.
            </h1>
            <p className="hero-desc">
              “Books & Prints Under One Roof!”<br />
              Read, Learn, Print — Everything in One Place.
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