import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData);
    }

    const handleChange = (e) => {
        e.target.value();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2 className='text-4xl'>Login</h2>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                id ='username'
                placeholder='Username'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                id = 'email'
                placeholder='Email'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <label htmlFor='password'>Username</label>
            <input
                type='password'
                name='password'
                id = 'password'
                placeholder='Password'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
        </form>
    </div>
  )
}

export default Login