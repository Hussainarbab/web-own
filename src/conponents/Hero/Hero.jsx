import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useAppContext } from '../../context/AppContext'
import SearchResults from '../SearchResults/SearchResults'
import './Hero.css'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [searchResults, setSearchResults] = useState({ developers: [], services: [] })
  const { developers, services } = useAppContext()

  // Helper function to extract years from experience string
  const extractYears = (experience) => {
    const match = experience.match(/(\d+)/)
    return match ? parseInt(match[1]) : 0
  }

  const handleSearch = (e) => {
    e.preventDefault()
    
    if (!searchQuery.trim()) {
      return
    }

    const query = searchQuery.toLowerCase().trim()

    // Search developers by their types
    const filteredDevelopers = developers.filter(developer => {
      const types = Array.isArray(developer.types) 
        ? developer.types 
        : developer.type 
          ? [developer.type] 
          : []
      
      return types.some(type => 
        type.toLowerCase().includes(query) || 
        query.includes(type.toLowerCase())
      )
    })

    // Sort developers by experience (highest first)
    const sortedDevelopers = [...filteredDevelopers].sort((a, b) => {
      const yearsA = extractYears(a.experience)
      const yearsB = extractYears(b.experience)
      return yearsB - yearsA
    })

    // Search services by name
    const filteredServices = services.filter(service =>
      service.name.toLowerCase().includes(query) ||
      query.includes(service.name.toLowerCase())
    )

    setSearchResults({
      developers: sortedDevelopers,
      services: filteredServices
    })
    setShowResults(true)
  }

  const handleCloseResults = () => {
    setShowResults(false)
    setSearchQuery('')
  }

  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* Left side */}
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Find Expert<br />
              Developers & Services
            </h1>
          </div>
          <div className="hero-description">
            <span>
              Connect with skilled developers ready to bring your projects to life.
              Hire experienced professionals for web development, WordPress, and more.
            </span>
          </div>

          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearch}>
            <HiSearch color="#4066ff" size={25} />
            <input
              type="text"
              placeholder="Search developers (e.g., web developer, react) or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

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

      {/* Search Results Modal */}
      {showResults && (
        <SearchResults
          results={searchResults}
          query={searchQuery}
          onClose={handleCloseResults}
        />
      )}
    </section>
  )
}

