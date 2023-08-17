import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/index.scss'

import Home from './routes/home'

export default function router () {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
