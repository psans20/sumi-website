import React from 'react'
import HomeVideo from '../../home/Top/HomeVideo'
import { useLocation } from 'react-router-dom'

export default function Video () {
  const {pathname} = useLocation(); 
  console.log(pathname, "PATHNAME"); 
  return (
    <div className='col-span-3 mr-4'>
      <HomeVideo />
    </div>
  )
}
