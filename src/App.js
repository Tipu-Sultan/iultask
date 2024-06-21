import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App