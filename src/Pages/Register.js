import React, { useState } from 'react'
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import Button from '../Components/Button'

const Register = ({ user }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password).catch((e) => {
      console.log(e)
    })
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
          text="Register"
          onClick={handleRegister}
          id="register-button"
          type="button"
        />
      </form>
    </div>
  )
}

export default Register
