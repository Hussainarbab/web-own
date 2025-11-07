import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-vision">
            Our vision is to connect businesses with talented developers and provide the best development services.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <h3>Information</h3>
            <p>Gilgit Baltistan, Pakistan</p>
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

