import React from 'react'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Presentation from './components/Presentation/Presentation'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Footer />
    </>
  )
}
