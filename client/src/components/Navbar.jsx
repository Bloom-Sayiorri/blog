import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/blog.jpg';
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";

const Navbar = ({ isDark, handleDark }) => {

  return (
    <header className='flex justify-between items-center py-2 px-4'>
      <div className=''>
        {/* <img src={logo} alt='Logo' height={40} width={40} className='bg-transparent' /> */}
        <NavLink to="/" className=''>
          <h1 className='font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500/40 text-transparent bg-clip-text text-xl z-3'>Blogz</h1>
        </NavLink>
      </div>

      <nav className='flex items-center gap-5'>
        <NavLink to='/' className='' activeClassName="active">Home</NavLink>
        <NavLink to='/blogs' className=''>Blogs</NavLink>
        <NavLink to='/profile' className=''>Profile</NavLink>
        <NavLink to='/about' className=''>About</NavLink>
        <NavLink to='/signup' className=''>Signup</NavLink>
        <NavLink to='/login' className=''>Login</NavLink>
      </nav>

      <button type='button' onClick={handleDark}>
        {isDark ? <LuSunDim className={`text-2xl ${isDark ? 'text-white' : ''}`}/> : <FaMoon className={`${isDark ? '' : 'text-black'}`}/>}
      </button>
    </header>
  )
}

export default Navbar