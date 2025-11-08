import React, { useState } from 'react'
import GetStartedModal from './GetStartedModal'
import './GetStarted.css'

export default function GetStarted() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="getstarted" className="getstarted-wrapper">
      <div className="getstarted-container">
        <h2>Get started with Arbabxada</h2>
        <p>
          Subscribe and find super attractive price quotes from us.
          Connect with expert developers for your projects.
        </p>
        <button 
          className="getstarted-button"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
      </div>

      {/* Get Started Modal */}
      {showModal && (
        <GetStartedModal onClose={() => setShowModal(false)} />
      )}
    </section>
  )a
}

