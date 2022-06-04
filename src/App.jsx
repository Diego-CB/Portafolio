import { useState } from 'react'
import logo from './assets/images/logo.svg'
import './styles/App.scss'

// <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Handicon - Flaticon</a>

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="header"></section>
      <section className="slider"></section>
      <section className="contact"></section>
    </div>
  )
}

export default App
