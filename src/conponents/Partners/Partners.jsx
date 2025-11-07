import React from 'react'
import { HiGlobeAlt, HiCode, HiLightningBolt } from 'react-icons/hi'
import { FaBuilding, FaLaptopCode } from 'react-icons/fa'
import './Partners.css'

export default function Partners() {
  const partners = [
    { name: 'MURAZOID', icon: <HiCode size={40} /> },
    { name: 'GB TECH SOLUTIONS', icon: <FaLaptopCode size={40} /> },
    { name: 'KARAKORAM DIGITAL', icon: <HiGlobeAlt size={40} /> },
    { name: 'HUNZA DEVELOPERS', icon: <HiLightningBolt size={40} /> },
    { name: 'BALTISTAN IT', icon: <FaBuilding size={40} /> }
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

