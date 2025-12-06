import React from "react";
import './Service.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Service() {
  return (
    <section className="service-wrapper">
      <Navbar />
      <div className="service-inner">
        <h2 className="service-heading">Our Services</h2>
        <p className="service-subtitle">
          We provide fast, reliable, and high-quality Xerox & printing solutions.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <div className="image1"></div>
            <i className="fas fa-print service-icon"></i>
            <h3 className="service-title">Xerox & Photocopy</h3>
            <p className="service-desc">
              Quick and high-quality photocopying for all your documents.
            </p>
          </div>
          <div className="service-card">
            <div className="image2"></div>
            <i className="fas fa-file-pdf service-icon"></i>
            <h3 className="service-title">Printing Services</h3>
            <p className="service-desc">
              Color and black & white printing for personal and professional use.
            </p>
          </div>
          <div className="service-card">
            <div className="image3"></div>
            <i className="fas fa-laptop service-icon"></i>
            <h3 className="service-title">Scanning & Digital</h3>
            <p className="service-desc">
              Fast scanning and digital document conversion services.
            </p>
          </div>

         
          <div className="service-card">
            <div className="image4"></div>
            <i className="fas fa-book service-icon"></i>
            <h3 className="service-title">Binding & Lamination</h3>
            <p className="service-desc">
              Professional binding and lamination for your documents and projects.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}