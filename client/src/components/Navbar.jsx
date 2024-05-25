import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";

const Navbar = ({ isDark, handleDark }) => {

  return (
    <header className='flex justify-between sticky'>
      <div className='flex justify-center align-center text-center'>
        <img className='h-20 w-20 text-center text-4xl' src={logo} alt="logo"/>
        {/* <h1 className='font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500/40 text-transparent bg-clip-text text-4xl'>Blog App</h1> */}
      </div>
      <nav>
        <NavLink to='/home' className=''>Home</NavLink>
        <NavLink to='/blogs' className=''>Blogs</NavLink>
        <NavLink to='/profile' className=''>Profile</NavLink>
        <NavLink to='/about' className=''>About</NavLink>
        <NavLink to='/signup' className=''>Signup</NavLink>
        <NavLink to='/login' className=''>Login</NavLink>
      </nav>
      <button type='button' onClick={handleDark}>
        {isDark ? <LuSunDim className={`text-2xl ${isDark ? 'text-white' : 'text-black'}`}/> : <FaMoon className={`${isDark ? '' : 'text-zinc-700'}`}/>}
      </button>
    </header>
  )
}

export default Navbar

