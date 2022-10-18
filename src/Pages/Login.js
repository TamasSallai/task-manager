import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Button from '../Components/Button'
import { auth } from '../Firebase'

const Login = ({ user }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password).catch((e) =>
      console.log(e)
    )
  }

  return (
    <div>
      {user && <Navigate to="/" replace={true} />}
      <form>
        <label>Email address: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleLogin}
          id="login-button"
          text="Login"
          type="button"
        />
      </form>
    </div>
  )
}

export default Login
