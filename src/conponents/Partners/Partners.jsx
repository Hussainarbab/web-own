import React from 'react'
import { HiGlobeAlt } from 'react-icons/hi'
import { FaBuilding } from 'react-icons/fa'
import './Partners.css'

export default function Partners() {
  const partners = [
    { name: 'PROLOGIS.', icon: <HiGlobeAlt size={40} /> },
    { name: 'AMERICAN TOWER', icon: <FaBuilding size={40} /> },
    { name: 'EQUINIX', icon: <span className="equinix-icon">E</span> },
    { name: 'DIGITAL REALTY', icon: <FaBuilding size={40} /> }
  ]

  return (
    <section className="partners-wrapper">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <div className="partner-icon">{partner.icon}</div>
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

