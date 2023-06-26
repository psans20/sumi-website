import React from 'react'
import '../src/App.css'
import Navbar from './components/Navbar'
import Mobile from './components/home/Mobile'

import Layout from './components/Layout'


function Home (props) {
  return (
    <div className='bg h-full w-full'>
      <Navbar />
      <div className='md:hidden flex flex-col items-center justify-center bg'>
        <Mobile />
      </div>

      <div className=' flex flex-col items-center justify-center bg w-full'>
        <Layout/>
      </div>
    </div>
  )
}

function App () {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
