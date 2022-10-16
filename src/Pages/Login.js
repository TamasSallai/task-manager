import React from 'react'

const Login = () => {
  const handleLogin = () => {}

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Email address: </label>
        <input type="email" name="email" />
        <label>Password: </label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login
