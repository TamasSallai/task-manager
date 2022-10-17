import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth } from './Firebase'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/login" element={<Login user={currentUser} />} />
        <Route path="/register" element={<Register user={currentUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
