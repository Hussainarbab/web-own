import React from 'react'
import { AppProvider } from './context/AppContext'
import Header from './conponents/Header/Header'
import Hero from './conponents/Hero/Hero'
import Partners from './conponents/Partners/Partners'
import Residencies from './conponents/Residencies/Residencies'
import Developers from './conponents/Developers/Developers'
import Value from './conponents/Value/Value'
import Contact from './conponents/Contact/Contact'
import GetStarted from './conponents/GetStarted/GetStarted'
import Footer from './conponents/Footer/Footer'
import './App.css'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Hero />
        <Partners />
        <Residencies />
        <Developers />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App