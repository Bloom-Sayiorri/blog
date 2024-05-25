import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
    }

    const handleChange = (e) => {
        e.target.value();
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit} className=''>
            <h2 className='text-4xl'>Login</h2>
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                id = 'email'
                placeholder='Email'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id = 'password'
                placeholder='Password'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <input type='button' value='Sign Up' className='rounded-lg py-3 px-6 bg-blue-500 text-white'/>
        </form>
    </div>
  )
}

export default Login