import React, { useState, useEffect } from 'react'
import AWork from './AWork'

import bot from '../../assets/images/Works/bot.webp'
import cssArt from '../../assets/images/Works/css-art.png'
import mem from '../../assets/images/Works/memoria.png'
import pacman from '../../assets/images/Works/pacman.png'
import calc from '../../assets/images/Works/calc.png'
import battle from '../../assets/images/Works/battle.png'
import sorry from '../../assets/images/Works/sorry.png'
import clon from '../../assets/images/Works/clon.png'
import page from '../../assets/images/Works/page.png'

const trabajos = [
  ['Page Clon', clon, 'http://juanelcaballo.club/20212/P1/', 'https://github.com/Nes15442/Proyecto1_Web'],
  ['Discord-Bot', bot, 'https://replit.com/@Dacb/ChillBot', 'https://replit.com/@Dacb/ChillBot'],
  ['Css-art', cssArt, 'http://juanelcaballo.club/20212/Lab04/', 'https://github.com/Nes15442/Lab04_Web'],
  ['Memory Game', mem, 'http://juanelcaballo.club/20212/Lab06/', 'https://github.com/Nes15442/Lab06_Web'],
  ['Battle Game', battle, 'https://replit.com/@Dacb/90s-Battle-Menu-Game', 'https://replit.com/@Dacb/90s-Battle-Menu-Game'],
  ['Maze Game', pacman, 'http://juanelcaballo.club/20212/Lab07/', ' https://github.com/Nes15442/Web_Lab07'],
  ['Simple Calculator', calc, 'https://Lab8Calculadora.dacb.repl.co', ' https://github.com/Nes15442/Lab8_web'],
  ['Sorry (Table Game)', sorry, 'https://replit.com/@Dacb/Sorry-Game', 'https://replit.com/@Dacb/Sorry-Game'],
  ['Personal page (this website)', page, 'https://IamDiego.dacb.repl.co', 'https://github.com/Nes15442/Portafolio'],
]

const desription = [
  <p>
    Clon of the HomePage of:
    <a href="https://www.atodoburrito.com/">
      A todo Burrito
    </a>
    <br />
    Made with React.JS
  </p>,
  <p>
    Discord bot made with python Discord library
    <br />
    hosted in Repl.it
  </p>,
  <p>Mandalorian helment ilustration made with pure css</p>,
  <p>
    {'Memory Game themed \'Avatar the Last Airbender\''}
    <br />
    made with React.js
  </p>,
  <p>
    Menu based battle game
    <br />
    Made in java
    <br />
    Hosted on Repl.it
  </p>,
  <p>
    PacMan themed Maze Game
    <br />
    Made with React.JS
  </p>,
  <p>
    Calculator with simple operations
    <br />
    Functionality made with react states
    <br />
    Hosted on Repl.it
  </p>,
  <p>
    Tablegame Sorry made with Java
    <br />
    CLI with visual live representation of the board
    <br />
    Hosted on Repl.it
  </p>,
  <p>
    Personal Presentation Page
    <br />
    Hosted on Repl.it
  </p>
]

const Slider = ({ direction, isMoving, setIsMoving }) => {
  const [augment, setAugment] = useState(0)
  const offset = augment / trabajos.length

  useEffect(() => {
    if (
      !isMoving
      || (augment === 0 && direction === 'left')
      || (augment === (trabajos.length - 1) && direction === 'right')
    ) return setIsMoving(false)

    const newAugment = (direction === 'left')
      ? augment - 1
      : augment + 1

    setAugment(newAugment)
    setIsMoving(false)
  }, [isMoving])

  return (
    <div className="slider">
      <ul
        style={{
          transform: `translateX(-${100 * offset}%)`,
          width: `calc(${100 * trabajos.length}% + 1px)`,
        }}
      >
        {trabajos.map((n) => (
          <AWork
            title={n[0]}
            description={desription[trabajos.indexOf(n)]}
            foto={n[1]}
            link={n[2]}
            git={n[3]}
            key={n[0]}
          />
        ))}
      </ul>
    </div>
  )
}

export default Slider
