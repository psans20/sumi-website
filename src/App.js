import React from 'react'
import '../src/App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/forum' element={<Layout />} />
    </Routes>
  )
}

export default App
