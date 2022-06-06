import React from 'react'
import '../styles/Skills.scss'
import ProgressBar from './ProgressBar'

import frontend from '../assets/images/skills/frontend.png'
import react from '../assets/images/skills/React.jpg'
import html from '../assets/images/skills/html.jpg'
import css from '../assets/images/skills/css.png'
import js from '../assets/images/skills/js.jpg'

import backend from '../assets/images/skills/backend.png'
import postgre from '../assets/images/skills/postgresql.webp'
import java from '../assets/images/skills/java.jpg'
import py from '../assets/images/skills/py.jpeg'
import c from '../assets/images/skills/c.jpeg'

import full from '../assets/images/skills/full.png'

const FrontList = () => (
  <ul>
    <li>
      <img src={react} alt="" />
      <h3>
        React
        <br />
        JS
      </h3>
      <ProgressBar completed={80} />
    </li>
    <li>
      <img src={css} alt="" />
      <h3>
        css
        <br />
        sass
      </h3>
      <ProgressBar completed={85} />
    </li>
    <li>
      <img src={html} alt="" />
      <h3>
        HTML
      </h3>
      <ProgressBar completed={85} />
    </li>
    <li>
      <img src={js} alt="" />
      <h3>
        JS
      </h3>
      <ProgressBar completed={88} />
    </li>
  </ul>
)

const BackList = () => (
  <ul>
    <li>
      <img src={java} alt="" />
      <h3>
        Java
      </h3>
      <ProgressBar completed={85} />
    </li>
    <li className="sql">
      <img src={py} alt="" />
      <h3>
        Python
      </h3>
      <ProgressBar completed={90} />
    </li>
    <li className="sql">
      <img src={postgre} alt="" />
      <h3>
        Postgre
        <br />
        SQL
      </h3>
      <ProgressBar completed={80} />
    </li>
    <li>
      <img src={c} alt="" />
      <h3>
        C C# C++
      </h3>
      <ProgressBar completed={60} />
    </li>
  </ul>
)

const Skills = () => (
  <section className="skills">
    <div className="frontend skill-list">
      <img src={frontend} alt="" />
      <h2>Frontend Developer</h2>
      <FrontList />
    </div>
    <div className="column-devider" />
    <div className="backend skill-list">
      <img src={backend} alt="" />
      <h2>Backend Developer</h2>
      <BackList />
    </div>
    <div className="other">
      <h2>Full Stack Developer</h2>
      <ul>
        <li>
          <img src={full} alt="" />
          <h3>
            PERN
            <br />
            STACK
          </h3>
          <ProgressBar completed={70} />
        </li>
      </ul>
    </div>
  </section>
)

export default Skills
