import React, { useState, useRef } from 'react'
import { HiX } from 'react-icons/hi'
import './AddDeveloper.css'

export default function AddDeveloper({ onAdd, onClose }) {
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    types: [],
    experience: '',
    profilePic: null,
    profilePicPreview: null
  })

  const developerTypes = [
    'Web Developer',
    'WordPress Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Node.js Developer',
    'PHP Developer'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.experience.trim() || formData.types.length === 0) {
      alert('Please fill in all required fields and select at least one developer type')
      return
    }

    // Convert image file to base64 for storage
    const submitData = { ...formData }
    if (formData.profilePic) {
      const reader = new FileReader()
      reader.onloadend = () => {
        submitData.profilePic = reader.result
        onAdd(submitData)
        // Reset form after successful add
        resetForm()
      }
      reader.readAsDataURL(formData.profilePic)
    } else {
      onAdd(submitData)
      // Reset form
      resetForm()
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      types: [],
      experience: '',
      profilePic: null,
      profilePicPreview: null
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target
    
    if (name === 'profilePic' && files && files[0]) {
      const file = files[0]
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePic: file,
          profilePicPreview: reader.result
        })
      }
      reader.readAsDataURL(file)
    } else if (name === 'types') {
      // Handle checkbox selection for multiple types
      if (checked) {
        setFormData({
          ...formData,
          types: [...formData.types, value]
        })
      } else {
        setFormData({
          ...formData,
          types: formData.types.filter(type => type !== value)
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Developer</h2>
          <button className="close-btn" onClick={onClose}>
            <HiX size={24} />
          </button>
        </div>

        <form className="add-developer-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Developer Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter developer name"
              required
            />
          </div>

          <div className="form-group">
            <label>Developer Types * (Select all that apply)</label>
            <div className="checkbox-group">
              {developerTypes.map((type) => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="types"
                    value={type}
                    checked={formData.types.includes(type)}
                    onChange={handleChange}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
            {formData.types.length === 0 && (
              <small style={{ color: '#ff4444' }}>Please select at least one developer type</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience *</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 3 years, 5+ years, 10 years"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profilePic">Profile Picture</label>
            <input
              ref={fileInputRef}
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
            {formData.profilePicPreview && (
              <div className="image-preview">
                <img src={formData.profilePicPreview} alt="Preview" />
              </div>
            )}
            <small>Select an image from your computer (max 5MB)</small>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Add Developer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

