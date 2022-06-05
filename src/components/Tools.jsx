import React from 'react'
import '../styles/Tools.scss'

import vs from '../assets/images/tools/vs.png'
import vite from '../assets/images/tools/vite.svg'
import github from '../assets/images/tools/github.png'
import elephant from '../assets/images/tools/elephant.png'
import replit from '../assets/images/tools/replit.png'
import terminal from '../assets/images/tools/terminal.png'
import lucid from '../assets/images/tools/lucid.webp'
import webpack from '../assets/images/tools/webpack.png'

const toolList = [
  [vs, 'Prefered IDE', 'VS Code'],
  [vite, 'Module Bundler for React.Js', 'Vite'],
  [github, 'Version Control and workflow', 'GitHub'],
  [elephant, 'Hosting service for PostgreSQL', 'ElephantSQL'],
  [replit, 'Online IDE and hosting platform', 'Repl.It'],
  [terminal, 'PowerShell / Bash scp / ssh', 'Terminal'],
  [lucid, 'Database modelation, Flow Diagram', 'LucidChart'],
  [webpack, 'Module Bundler for React.Js', 'Weback']
]

const Tools = () => (
  <section className="tools">
    <h2>Tools I Use</h2>
    <ul>
      {toolList.map((tool) => (
        <li key={tool[0]}>
          <p>{tool[1]}</p>
          <img src={tool[0]} alt="" />
          <h3>{tool[2]}</h3>
        </li>
      ))}
    </ul>
  </section>
)

export default Tools
