import { signInWithCredential } from 'firebase/auth'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../Firebase'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = async () => {
    await signInWithCredential(auth, email, password).catch((e) =>
      console.log(e)
    )

    return (
      <div>
        {auth.currentUser && <Navigate to="/" replace={true} />}
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
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
        </form>
      </div>
    )
  }
}

export default Login
