import React from 'react'
import '../src/App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './components/Layout'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/forum' element={<Home />} />
    </Routes>
  )
}

export default App
