import React from 'react'
import './styles/App.scss'

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Slider/Work'
import Tools from './components/Tools'

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Skills />
    <Work />
    <Tools />
    <footer>
      Diego Córdova 2022
    </footer>
  </div>
)

export default App
