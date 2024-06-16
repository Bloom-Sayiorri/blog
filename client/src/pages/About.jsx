import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='h-full'>
      <h1 className='text-4xl font-semibold text-center'>Blog App</h1>

      <div className='h-full flex justify-between items-center'>
        <img className='h-40 w-40' src={about} alt="About_Image" />

        <div className='h-3/5 bg-bg w-4'></div>

        <div className=''>
          <div className=''>
            <p>How To Use:</p>
            <p>This is a simple blog app that allows us to read and interact with blogs on the go.</p>
            <p>Feel free to read other people's blog or create your own personalized blogs!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About