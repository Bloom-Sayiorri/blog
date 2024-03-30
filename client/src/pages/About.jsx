import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='h-full'>
      <div> 
        <img className='h-1/2' src={about} alt="About_Image" />
      </div>
      <div>
        <h1 className=''>Blog App</h1>
        <h3>How To Use:</h3>
        <p>This is a simple blog app that allows us to read and interact with blogs on the go.</p>
        <p>Feel free to read other peoples blog or create, update & delete your own blogs!</p>
      </div>
    </div>
  )
}

export default About