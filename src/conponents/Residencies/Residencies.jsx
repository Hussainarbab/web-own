import React, { useState, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import './Residencies.css'

export default function Residencies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef(null)

  const properties = [
    {
      id: 1,
      name: 'Aliva Priva Jardin',
      price: '$47,043',
      address: 'Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Asatti Garden City',
      price: '$66,353',
      address: 'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Citralan Puri Serang',
      price: '$35,853',
      address: 'Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten',
      image: 'https://images.unsplash.com/photo-1605276373954-0c4a0dac5cc1?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Aliva Priva Jardin',
      price: '$47,043',
      address: 'Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop'
    }
  ]

  const scroll = (direction) => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 350
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(properties.length - 1, currentIndex + 1)

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
            <span className="orange-text">Best Choices</span>
            <h2>Popular Residencies</h2>
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
              disabled={currentIndex >= properties.length - 1}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="cards-container" ref={scrollRef}>
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <div className="card-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="card-content">
                <div className="card-price">{property.price}</div>
                <div className="card-name">{property.name}</div>
                <div className="card-address">{property.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

