import React, { useState } from 'react'
import './Header.css'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="h-wrapper">
      <div className="h-container">
        {/* Logo */}
        <img src="./logo.png" alt="" />

        {/* Hamburger icon (mobile) */}
        <div
          className={`menu-icon ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <div className={`h-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#residencies">Residencies</a>
          <a href="#values">Our Values</a>
          <a href="#contact">Contact Us</a>
          <a href="#getstarted">Get Started</a>
          <button><a href="#contact">Contact</a></button>
        </div>
      </div>
    </section>
  )
}
