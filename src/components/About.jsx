import React from 'react'
import '../styles/About.scss'
import avatar from '../assets/images/avatar.png'

const About = () => (
  <section className="about">
    <div className="about-content">
      <img src={avatar} alt="" />
      <h1>
        <strong>Student, Software Developer</strong>
        <br />
        <strong>& Musician</strong>
      </h1>
      <p>
        {'I\'m actualy coursing the 5th semester of computer science'}
        <br />
        I like working listening to some music and a cup of coffee at hand
      </p>
    </div>
  </section>
)

export default About
