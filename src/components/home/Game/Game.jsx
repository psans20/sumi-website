import React from 'react'
import Pokemon from './Pokemon'
import Top from './Top'

export default function Game () {
  return (
    <div className='grid grid-cols-4 '>
      <Pokemon/>
      <Top/>
    </div>
  )
}
