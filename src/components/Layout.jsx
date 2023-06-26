import React from 'react'
import Game from './home/Game'
import MediaC from './home/Media/MediaC'
import Announcements from './home/Announcements/Announcements'

export default function Layout () {
  return (
    <div className='2xl:px-52 w-full hidden md:block mt-40 pb-10'>
      <MediaC />
      <Announcements />
      <Game />
    </div>
  )
}
