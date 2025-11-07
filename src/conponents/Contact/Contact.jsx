import React from 'react'
import { HiPhone, HiChatAlt2, HiVideoCamera, HiMail } from 'react-icons/hi'
import './Contact.css'

export default function Contact() {
  const phoneNumber = '03555960875'
  const email = 'arbabhussan63@gmail.com'
  
  // Format phone number for WhatsApp (remove leading 0 and add country code for Pakistan +92)
  const whatsappNumber = '92' + phoneNumber.substring(1)

  const contactMethods = [
    {
      icon: <HiPhone size={30} />,
      title: 'Call',
      number: phoneNumber,
      buttonText: 'Call now',
      action: () => {
        window.location.href = `tel:${phoneNumber}`
      }
    },
    {
      icon: <HiChatAlt2 size={30} />,
      title: 'Chat',
      number: phoneNumber,
      buttonText: 'Chat now',
      action: () => {
        // Open WhatsApp chat
        window.open(`https://wa.me/${whatsappNumber}`, '_blank')
      }
    },
    {
      icon: <HiVideoCamera size={30} />,
      title: 'Video Call',
      number: phoneNumber,
      buttonText: 'Video Call now',
      action: () => {
        // Open WhatsApp - user can initiate video call from WhatsApp app
        // Note: Direct video call URLs aren't supported, opens WhatsApp chat
        window.open(`https://wa.me/${whatsappNumber}?text=Hello`, '_blank')
      }
    },
    {
      icon: <HiMail size={30} />,
      title: 'Message',
      number: email,
      buttonText: 'Message now',
      action: () => {
        // Open Gmail compose
        const subject = encodeURIComponent('Inquiry from Arbabxada Website')
        const body = encodeURIComponent('Hello,\n\nI would like to get in touch regarding...')
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
      }
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
            We are always ready to help by providing the best development services for you.
            Contact us to discuss your project requirements.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                alt="Development team" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

