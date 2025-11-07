import React, { useState } from 'react'
import { HiCode, HiUser, HiBriefcase } from 'react-icons/hi'
import { useAppContext } from '../../context/AppContext'
import AddDeveloper from './AddDeveloper'
import './Developers.css'

export default function Developers() {
  const { developers, addDeveloper: addDeveloperToContext, deleteDeveloper: deleteDeveloperFromContext } = useAppContext()
  const [showAddForm, setShowAddForm] = useState(false)

  const addDeveloper = (newDeveloper) => {
    addDeveloperToContext(newDeveloper)
    setShowAddForm(false)
  }

  const deleteDeveloper = (id) => {
    deleteDeveloperFromContext(id)
  }

  // Helper function to display types (handles both old string format and new array format)
  const displayTypes = (developer) => {
    if (Array.isArray(developer.types)) {
      return developer.types
    } else if (developer.type) {
      // Support old format for backward compatibility
      return [developer.type]
    }
    return []
  }

  return (
    <section id="developers" className="developers-wrapper">
      <div className="developers-container">
        {/* Header */}
        <div className="developers-header">
          <div className="header-left">
            <span className="orange-text">Our Team</span>
            <h2>Expert Developers</h2>
            <p className="section-description">
              Connect with skilled developers ready to bring your projects to life.
              Hire experienced professionals for web development, WordPress, and more.
            </p>
          </div>
          <div className="header-right">
            <button 
              className="add-developer-btn"
              onClick={() => setShowAddForm(true)}
            >
              <HiUser size={20} />
              Add Developer
            </button>
          </div>
        </div>

        {/* Developer Cards Grid */}
        <div className="developers-grid">
          {developers.map((developer) => (
            <div key={developer.id} className="developer-card">
              <button 
                className="delete-btn"
                onClick={() => deleteDeveloper(developer.id)}
                title="Delete Developer"
              >
                ×
              </button>
              <div className="developer-image">
                <img 
                  src={developer.profilePic || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(developer.name) + '&background=4066ff&color=fff&size=200'} 
                  alt={developer.name}
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(developer.name) + '&background=4066ff&color=fff&size=200'
                  }}
                />
              </div>
              <div className="developer-info">
                <h3 className="developer-name">{developer.name}</h3>
                <div className="developer-types">
                  <HiCode size={18} />
                  <div className="types-list">
                    {displayTypes(developer).map((type, index) => (
                      <span key={index} className="type-badge">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="developer-experience">
                  <HiBriefcase size={18} />
                  <span>{developer.experience} Experience</span>
                </div>
              </div>
              <button className="hire-btn">Hire Now</button>
            </div>
          ))}
        </div>

        {/* Add Developer Form Modal */}
        {showAddForm && (
          <AddDeveloper
            onAdd={addDeveloper}
            onClose={() => setShowAddForm(false)}
          />
        )}
      </div>
    </section>
  )
}

