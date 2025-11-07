import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-vision">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <h3>Information</h3>
            <p>145 New York, FL 5467, USA</p>
          </div>
          <div className="footer-links">
            <a href="#property">Property</a>
            <a href="#services">Services</a>
            <a href="#product">Product</a>
            <a href="#about">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

