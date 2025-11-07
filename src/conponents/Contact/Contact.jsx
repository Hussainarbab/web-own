import React from 'react'
import { HiPhone, HiChatAlt2, HiVideoCamera, HiMail } from 'react-icons/hi'
import './Contact.css'

export default function Contact() {
  const contactMethods = [
    {
      icon: <HiPhone size={30} />,
      title: 'Call',
      number: '021 123 145 14',
      buttonText: 'Call now',
      action: () => window.location.href = 'tel:02112314514'
    },
    {
      icon: <HiChatAlt2 size={30} />,
      title: 'Chat',
      number: '021 123 145 14',
      buttonText: 'Chat now',
      action: () => console.log('Chat clicked')
    },
    {
      icon: <HiVideoCamera size={30} />,
      title: 'Video Call',
      number: '021 123 145 14',
      buttonText: 'Video Call now',
      action: () => console.log('Video call clicked')
    },
    {
      icon: <HiMail size={30} />,
      title: 'Message',
      number: '021 123 145 14',
      buttonText: 'Message now',
      action: () => console.log('Message clicked')
    }
  ]

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-container">
        {/* Left side */}
        <div className="contact-left">
          <div className="contact-header">
            <span className="orange-text">Our Contact Us</span>
            <h2>Easy to contact us</h2>
          </div>
          <p className="contact-description">
            We always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          {/* Contact Cards Grid */}
          <div className="contact-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card">
                <div className="contact-card-content">
                  <div className="contact-card-icon">{method.icon}</div>
                  <div className="contact-card-info">
                    <h3>{method.title}</h3>
                    <p>{method.number}</p>
                  </div>
                  <button 
                    className="contact-card-button"
                    onClick={method.action}
                  >
                    {method.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="contact-right">
          <div className="contact-image-container">
            <div className="contact-image">
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

