import React from 'react'
import '../styles/ProgressBar.scss'

const ProgressBar = ({ completed }) => (
  <div className="progress-container">
    <div className="progress-bar">
      <div
        style={{
          width: `${completed}%`
        }}
        className="filler"
      />
    </div>
    <h4>
      {completed}
      %
    </h4>
  </div>
)

export default ProgressBar
