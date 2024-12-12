import React from 'react'
import resume from '../image/resume.pdf'
import photo from '../image/photo.png'
import './Css/About.css'
import Icons from './Icons'
function About() {
  return (
    <section id='about' className='about'>
          
          <img src={photo} className='profile-image' alt='ragupathy' xs={12} md={12}></img>
          
          <div className='text'>
          <h1>About me</h1>
          <p>
          Aspiring Fullstack Developer passionate about creating 
          dynamic web experiences. Proficient in front-end technologies
          like HTML, CSS, JavaScript, and React.js for building responsive interfaces.
          Skilled in Python, Django, and SQL for robust back-end development and efficient database management. 
          Dedicated to clean, maintainable code and continuous learning to deliver innovative, high-quality solutions. 
          Thrives in collaborative environments and eager to contribute to impactful projects.
          </p>
           <a className='download'aria-label='resume' href={resume} download='resume'>download resume</a>
           <Icons></Icons>
          </div>

    </section>
  )
}

export default About