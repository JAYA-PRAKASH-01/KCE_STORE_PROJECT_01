import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>   
      {/* Add id="contact" here */}
      <footer className="footer-wrapper" id="contact">
        <div className="footer-inner">

          {/* Contact Section */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li><i className="fas fa-phone-alt footer-icon"></i> +91 63824 61944</li>
              <li><i className="fas fa-envelope footer-icon"></i> doc-hub@gmail.com</li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="footer-column">
            <h3 className="footer-heading">Location</h3>
            <ul className="footer-contact-list">
              <li><i className="fas fa-map-marker-alt footer-icon"></i> Karpagam College Of Engineering</li>
              <li><i className="fas fa-map-marker-alt footer-icon"></i> Tamil Nadu, India</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="footer-column">
            <h3 className="footer-heading">Business Hours</h3>
            <ul className="footer-contact-list">
              <li><i className="fas fa-clock footer-icon"></i> Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li><i className="fas fa-clock footer-icon"></i> Saturday: 10:00 AM - 5:00 PM</li>
              <li><i className="fas fa-clock footer-icon"></i> Sunday: Closed</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-copyright">
          &copy; 2023 Xerox Store. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
