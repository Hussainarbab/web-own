import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [developers, setDevelopers] = useState([
    {
      id: 1,
      name: 'John Doe',
      types: ['Web Developer', 'React Developer'],
      experience: '5 years',
      profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces'
    },
    {
      id: 2,
      name: 'Jane Smith',
      types: ['WordPress Developer', 'Frontend Developer'],
      experience: '3 years',
      profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      types: ['Full Stack Developer', 'Node.js Developer'],
      experience: '7 years',
      profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces'
    }
  ])

  const services = [
    {
      id: 1,
      name: 'React Development',
      description: 'Modern, scalable React applications with best practices and latest features',
      price: 'Starting from $500',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Next.js Development',
      description: 'Server-side rendering and static site generation for optimal performance',
      price: 'Starting from $600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Python Development',
      description: 'Robust backend solutions, APIs, and data processing with Python',
      price: 'Starting from $550',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Digital Marketing',
      description: 'SEO, social media marketing, and content strategy to grow your business',
      price: 'Starting from $400',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and e-commerce solutions',
      price: 'Starting from $450',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Frontend Development',
      description: 'Beautiful, responsive user interfaces with HTML, CSS, and JavaScript',
      price: 'Starting from $500',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Backend Development',
      description: 'Secure and scalable server-side solutions and database management',
      price: 'Starting from $550',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    }
  ]

  const addDeveloper = (newDeveloper) => {
    const developer = {
      id: Date.now(),
      ...newDeveloper
    }
    setDevelopers([...developers, developer])
  }

  const deleteDeveloper = (id) => {
    setDevelopers(developers.filter(dev => dev.id !== id))
  }

  const value = {
    developers,
    services,
    addDeveloper,
    deleteDeveloper,
    setDevelopers
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

