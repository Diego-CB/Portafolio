import React, { useState } from 'react'
import '../../styles/Work.scss'
import ArrowButton from './ArrowButton'
import Slider from './Slider'

const Work = () => {
  const [direction, setDirection] = useState('')
  const [isMoving, setIsMoving] = useState(false)

  const setter = dir => {
    setDirection(dir)
    setIsMoving(true)
  }

  return (
    <section className="slider-container">
      <h2>Some of my Work</h2>
      <div className="actual-slider">
        <ArrowButton
          setter={setter}
          direction="left"
        />
        <Slider
          direction={direction}
          setIsMoving={setIsMoving}
          isMoving={isMoving}
        />
        <ArrowButton
          setter={setter}
          direction="right"
        />
      </div>
    </section>
  )
}

export default Work
