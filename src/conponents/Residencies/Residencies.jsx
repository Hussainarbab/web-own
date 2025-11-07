import React, { useState, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useAppContext } from '../../context/AppContext'
import './Residencies.css'

export default function Residencies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)
  const { services } = useAppContext()

  const scroll = (direction) => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 350
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(services.length - 1, currentIndex + 1)

    setCurrentIndex(newIndex)
    container.scrollTo({
      left: newIndex * scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section id="residencies" className="residencies-wrapper">
      <div className="residencies-container">
        {/* Header */}
        <div className="residencies-header">
          <div className="header-left">
            <span className="orange-text">Featured Services</span>
            <h2>Our Services</h2>
          </div>
          <div className="header-right">
            <button 
              className="nav-button"
              onClick={() => scroll('left')}
              disabled={currentIndex === 0}
            >
              <HiChevronLeft size={20} />
            </button>
            <button 
              className="nav-button"
              onClick={() => scroll('right')}
              disabled={currentIndex >= services.length - 1}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="cards-container" ref={scrollRef}>
          {services.map((service) => (
            <div key={service.id} className="property-card">
              <div className="card-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="card-content">
                <div className="card-price">{service.price}</div>
                <div className="card-name">{service.name}</div>
                <div className="card-address">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

