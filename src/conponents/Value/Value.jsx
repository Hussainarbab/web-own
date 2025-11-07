import React, { useState } from 'react'
import { HiHeart, HiShieldCheck, HiOfficeBuilding } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'
import './Value.css'

export default function Value() {
  const [openIndex, setOpenIndex] = useState(0)

  const values = [
    {
      icon: <HiHeart size={30} />,
      title: 'Best interest rates on the market',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      icon: <HiShieldCheck size={30} />,
      title: 'Prevent unstable prices',
      description: 'We ensure stable pricing structures that protect you from market fluctuations. Our transparent pricing model gives you peace of mind and financial security.'
    },
    {
      icon: <HiOfficeBuilding size={30} />,
      title: 'Best price on the market',
      description: 'Get the most competitive prices available. We negotiate the best deals for our clients, ensuring you get maximum value for your investment.'
    }
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="values" className="value-wrapper">
      <div className="value-container">
        {/* Left side */}
        <div className="value-left">
          <div className="value-header">
            <span className="orange-text">Our Value</span>
            <h2>Value We Give to You</h2>
          </div>
          <p className="value-description">
            We always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          {/* Accordion */}
          <div className="accordion">
            {values.map((value, index) => (
              <div key={index} className="accordion-item">
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-icon">{value.icon}</div>
                  <span className="accordion-title">{value.title}</span>
                  <HiChevronDown 
                    className={`accordion-arrow ${openIndex === index ? 'open' : ''}`}
                    size={20}
                  />
                </div>
                {openIndex === index && (
                  <div className="accordion-content">
                    <p>{value.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="value-right">
          <div className="value-image-container">
            <div className="value-image">
              <img 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=600&fit=crop" 
                alt="Modern house" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

