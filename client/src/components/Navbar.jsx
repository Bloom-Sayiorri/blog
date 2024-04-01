import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaMoon, LuSunDim } from "react-icons/fa";

const Navbar = ({ isActive, isPending, isTransitioning, isDark, handleDark }) => {



  return (
    <div className='flex justify-between'>
      <div className='flex justify-center align-center text-center'>
        <img className='h-20 w-20 text-center' src={logo} alt="logo"/>
        <h1 className='font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500/40 text-transparent bg-clip-text text-4xl'>Blog App</h1>
      </div>
      
      <nav>
        <NavLink
          to="/home"
          className={`
            ${isActive ? 'font-bold' : ''}
            ${isPending ? 'text-red-500' : 'text-black'}
            ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}
          `}
        >
          Home
        </NavLink>

        <NavLink
          to="/blogs"
          className={`
            ${isActive ? 'font-bold' : ''}
            ${isPending ? 'text-red-500' : 'text-black'}
            ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}
          `}
        >
          Blogs
        </NavLink>

        <NavLink
          to="/profile"
          className={`
            ${isActive ? 'font-bold' : ''}
            ${isPending ? 'text-red-500' : 'text-black'}
            ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}
          `}
        >
          Profile
        </NavLink>

        <NavLink
          to="/about"
          className={`
            ${isActive ? 'font-bold' : ''}
            ${isPending ? 'text-red-500' : 'text-black'}
            ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}
          `}
        >
          About
        </NavLink>
      </nav>
      <button type='button' onClick={handleDark}>
        {isDark ? <FaMoon /> : <LuSunDim />}
      </button>
    </div>
  )
}

export default Navbar