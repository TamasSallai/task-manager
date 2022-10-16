import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
