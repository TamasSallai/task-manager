import React from 'react'
import { auth } from '../Firebase'

const Home = () => {
  const handleLogOut = async () => {
    await auth.signOut()
    window.location.reload(false)
  }
  return (
    <div>
      <h1>Home page</h1>
      {auth.currentUser && (
        <div>
          <div>Logged in as: {auth.currentUser.email}</div>
          <br />
          <button onClick={handleLogOut}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Home
