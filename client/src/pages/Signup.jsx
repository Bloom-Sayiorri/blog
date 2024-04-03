import React from 'react'

const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        e.target.value();
    }

  return (
    <div>
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
                id ='password'
                placeholder='Enter your Password'
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <input type='button' value='Login' className='rounded-lg py-3 px-6 bg-blue-500 text-white'/>
        </form>
    </div>
  )
}

export default Signup