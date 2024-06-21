import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RemoveBackgroundPage from './Components/RemoveBackgroundPage'
import HomeLayout from './Components/HomeLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/remove-background" element={<RemoveBackgroundPage />} />
    </Routes>
  )
}

export default App
