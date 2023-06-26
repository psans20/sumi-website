import React from 'react'
import Game from './home/Game'
import MediaC from './home/Media/MediaC'
import Announcements from './home/Announcements'

export default function Layout () {
  return (
    <div className='px-40 w-full hidden md:block mt-40'>
      <MediaC />
      <Announcements />
      <Game />
    </div>
  )
}
