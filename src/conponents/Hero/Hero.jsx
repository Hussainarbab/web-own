import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './Hero.css'

export default function Hero() {
  const [searchLocation, setSearchLocation] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchLocation)
  }

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* Left side */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover Most<br />
              Suitable Property
            </h1>
          </div>
          <div className="hero-description">
            <span>
              Find a variety of properties that suit you very easily.
              Forget all difficulties in finding a residence for you.
            </span>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <HiLocationMarker color="#4066ff" size={25} />
            <input
              type="text"
              placeholder="Search by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {/* Statistics */}
          <div className="stats">
            <div className="stat">
              <span className="stat-number">9,000<span className="plus">+</span></span>
              <span className="stat-label">Premium Product</span>
            </div>
            <div className="stat">
              <span className="stat-number">2,000<span className="plus">+</span></span>
              <span className="stat-label">Happy Customer</span>
            </div>
            <div className="stat">
              <span className="stat-number">28<span className="plus">+</span></span>
              <span className="stat-label">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right side - Background decoration */}
        <div className="hero-right">
          <div className="image-container">
            <div className="arch-shape"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

