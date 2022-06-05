/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import '../../styles/Work.scss'

const AWork = ({
  title,
  description,
  foto,
  link,
  git
}) => (
  <div className="a-work">
    <a href={link}>
      <img src={foto} alt="" />
    </a>
    <div className="work-info">
      <h3>{title}</h3>
      <a href={git}>{git}</a>
      <hr />
      {description}
    </div>
  </div>
)

export default AWork
