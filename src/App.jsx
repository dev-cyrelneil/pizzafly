import React from 'react'
import Header from './section/Header'
import Hero from './section/Hero'
import About from './section/About'
import TopRated from './section/TopRated'
import BestSeller from './section/BestSeller'
import Faq from './section/Faq'
import Contact from './section/Contact'
import Footer from './section/Footer'
import { DarkModeProvider } from './DarkModeContext'

const App = () => {
  return (
    <>

      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSeller />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>

    </>
  )
}

export default App