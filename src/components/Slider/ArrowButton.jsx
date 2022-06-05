import React from 'react'
import '../../styles/Work.scss'
import arrow from '../../assets/images/next.png'

const ArrowButton = ({ setter, direction }) => {
  const side = (direction === 'right')
    ? { transform: 'rotateZ(180deg)' }
    : { transform: 'rotateZ(0)' }

  return (
    <button
      className="arrow-button"
      style={side}
      type="button"
      onClick={() => setter(direction)}
    >
      <img src={arrow} alt="" />
    </button>
  )
}

export default ArrowButton
