import React from 'react'
import LatestNews from './LatestNews'
import Feed from './Feed'

export default function Announcements () {
  return (
    <div className='grid grid-cols-4 '>
      <LatestNews />
      <Feed/>
    </div>
  )
}
