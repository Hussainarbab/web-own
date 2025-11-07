import React, { useState, useEffect } from 'react'
import { HiX, HiMail, HiPhone, HiUser, HiDocumentText } from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import { useAppContext } from '../../context/AppContext'
import './GetStartedModal.css'

export default function GetStartedModal({ onClose }) {
  const { services } = useAppContext()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    subscribe: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState('')

  // Note: You need to replace the EmailJS credentials below with your actual values
  // See EMAILJS_SETUP.md file for detailed setup instructions

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate form
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in your name and email')
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'arbabhussan63@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        message: formData.message || 'No message provided',
        subscribe: formData.subscribe ? 'Yes' : 'No',
        // Format the email body
        reply_to: formData.email,
        subject: `New Get Started Form Submission from ${formData.name}`
      }

      // Send email using EmailJS
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your actual EmailJS credentials
      // Get these from your EmailJS dashboard after setting up your account
      const response = await emailjs.send(
        'service_rj15l8n',  // Replace with your EmailJS Service ID (e.g., 'service_abc123')
        'template_s4leizm', // Replace with your EmailJS Template ID (e.g., 'template_xyz789')
        templateParams,
        'Vc3C25fK1ukBMvtfl'   // Replace with your EmailJS Public Key (e.g., 'abc123xyz456')
      )

      console.log('Email sent successfully!', response.status, response.text)
      
      setSubmitSuccess(true)
      setIsSubmitting(false)

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          subscribe: true
        })
        setSubmitSuccess(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setError('Failed to submit form. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content success-content" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">✓</div>
          <h2>Thank You!</h2>
          <p>Your request has been submitted successfully. We'll contact you soon with attractive price quotes!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content getstarted-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Get Started with Arbabxada</h2>
          <button className="close-btn" onClick={onClose}>
            <HiX size={24} />
          </button>
        </div>

        <form className="getstarted-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <HiUser size={18} />
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <HiMail size={18} />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                <HiPhone size={18} />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 355 5960875"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service (optional)</option>
                {services.map((service) => (
                  <option key={service.id} value={service.name}>
                    {service.name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <HiDocumentText size={18} />
              Project Description / Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or what you're looking for..."
              rows="4"
            ></textarea>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              <span>Subscribe to our newsletter for updates and special offers</span>
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </button>
          </div>

          <p className="form-note">
            By submitting this form, you agree to receive communications from Arbabxada.
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  )
}

