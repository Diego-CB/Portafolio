import React from 'react'
import '../styles/Header.scss'

const Header = () => (
  <header className="header">
    <div className="hi-diego">
      <h2>{'Hi, I\'m Diego Córdova'}</h2>
    </div>
    <div className="header-contact">
      <a href="https://github.com/Nes15442">
        <strong>GitHub</strong>
      </a>
      <a href="https://replit.com/@Dacb">
        <strong>Repl.it</strong>
      </a>
      <a href="https://wa.me/50254149519?text=Hi Diego, I saw your potfolio">
        <strong>WhatsApp</strong>
      </a>
      <a href="mailto:cordova15441@gmail.com">
        <strong>Email</strong>
      </a>
    </div>
  </header>
)

export default Header
