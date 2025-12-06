// About.jsx
import React from "react";
import "./About.css";
import "./variables.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-wrapper">
        <section className="about-hero">
          <div className="about-hero-inner">
            <h1 className="about-title">About Xerox Store</h1>
            <p className="about-sub">
              We're a local printing and document solutions company delivering fast,
              reliable, and professional services for students, businesses and
              individuals.
            </p>
            <div className="cta-row">
              <button className="btn-primary">Our Services</button>
              <button className="btn-ghost" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <section className="about-mission">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              To simplify document handling with affordable printing, high-quality
              photocopying, scanning and finishing services — delivered quickly and
              with friendly service.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-value">10k+</div>
                <div className="stat-label">Prints/month</div>
              </div>
              <div className="stat">
                <div className="stat-value">8 yrs</div>
                <div className="stat-label">In business</div>
              </div>
              <div className="stat">
                <div className="stat-value">99%</div>
                <div className="stat-label">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="container">
            <h2>Meet the Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="avatar">SP</div>
                <h4>Selvam P.</h4>
                <p>Founder & Manager</p>
              </div>
              <div className="team-card">
                <div className="avatar">RA</div>
                <h4>Raji A.</h4>
                <p>Operations</p>
              </div>
              <div className="team-card">
                <div className="avatar">KK</div>
                <h4>Kannan K.</h4>
                <p>Printing Specialist</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-why container">
          <h2>Why Choose Us</h2>
          <ul className="why-list">
            <li>Fast turnaround — same day for many jobs</li>
            <li>Competitive pricing and transparent quotes</li>
            <li>High-quality prints & reliable finishing</li>
            <li>Friendly local support</li>
          </ul>
        </section>

        <Footer />
      </main>
    </>
  );
}
