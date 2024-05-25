import React, { useState } from 'react'

const Signup = () => {
// add password confirmation field
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http.example.api')
        .then(r => r.json())
        .then(data => setFormData(data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData)
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl'>Sign Up</h2>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                id ='username'
                value={formData.username}
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                id = 'email'
                value={formData.email}
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id ='password'
                value={formData.password}
                onChange={handleChange}
                className='rounded-lg border-none py-2 px-4 max-w-80 w-48'
            />
            <input type='button' value='Login' className='rounded-lg py-3 px-6 bg-blue-500 text-white'/>
        </form>
    </div>
  )
}

export default Signup
/*
function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
*/