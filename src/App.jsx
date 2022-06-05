import { useState } from 'react'
import './styles/App.scss'

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'

// <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Handicon - Flaticon</a>

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <section className="slider"></section>
      <section className="contact"></section>
    </div>
  )
}

export default App
