import React from 'react'
import { HiX, HiCode, HiBriefcase } from 'react-icons/hi'
import './SearchResults.css'

export default function SearchResults({ results, query, onClose }) {
  const { developers = [], services = [] } = results

  // Helper function to extract years from experience string
  const extractYears = (experience) => {
    const match = experience.match(/(\d+)/)
    return match ? parseInt(match[1]) : 0
  }

  // Helper function to display types
  const displayTypes = (developer) => {
    if (Array.isArray(developer.types)) {
      return developer.types
    } else if (developer.type) {
      return [developer.type]
    }
    return []
  }

  if (developers.length === 0 && services.length === 0) {
    return (
      <div className="search-results-overlay" onClick={onClose}>
        <div className="search-results-modal" onClick={(e) => e.stopPropagation()}>
          <div className="search-results-header">
            <h2>Search Results for "{query}"</h2>
            <button className="close-btn" onClick={onClose}>
              <HiX size={24} />
            </button>
          </div>
          <div className="no-results">
            <p>No results found for "{query}"</p>
            <span>Try searching for a developer type or service name</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="search-results-overlay" onClick={onClose}>
      <div className="search-results-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-results-header">
          <h2>Search Results for "{query}"</h2>
          <button className="close-btn" onClick={onClose}>
            <HiX size={24} />
          </button>
        </div>

        <div className="search-results-content">
          {/* Developers Results */}
          {developers.length > 0 && (
            <div className="results-section">
              <h3 className="results-title">
                <HiCode size={24} />
                Developers ({developers.length})
              </h3>
              <div className="developers-results-grid">
                {developers.map((developer) => (
                  <div key={developer.id} className="result-developer-card">
                    <div className="result-developer-image">
                      <img
                        src={developer.profilePic || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(developer.name) + '&background=4066ff&color=fff&size=200'}
                        alt={developer.name}
                        onError={(e) => {
                          e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(developer.name) + '&background=4066ff&color=fff&size=200'
                        }}
                      />
                    </div>
                    <div className="result-developer-info">
                      <h4>{developer.name}</h4>
                      <div className="result-types-list">
                        {displayTypes(developer).map((type, index) => (
                          <span key={index} className="result-type-badge">
                            {type}
                          </span>
                        ))}
                      </div>
                      <div className="result-experience">
                        <HiBriefcase size={16} />
                        <span>{developer.experience}</span>
                      </div>
                      <button className="result-hire-btn">Hire Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Results */}
          {services.length > 0 && (
            <div className="results-section">
              <h3 className="results-title">
                Services ({services.length})
              </h3>
              <div className="services-results-grid">
                {services.map((service) => (
                  <div key={service.id} className="result-service-card">
                    <div className="result-service-image">
                      <img src={service.image} alt={service.name} />
                    </div>
                    <div className="result-service-info">
                      <div className="result-service-price">{service.price}</div>
                      <h4>{service.name}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

