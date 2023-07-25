import React from 'react'
import Mobile from './home/Mobile'
import Navbar from './Navbar'
import Messages from './shared/Media/Messages'
import LatestNews from './shared/Announcements/LatestNews'

import Pokemon from './home/Bottom/Pokemon'
import Top from './home/Bottom/Top'
import Feed from './shared/Announcements/Feed'
import VideoContent from './shared/Media/VideoContent'
import LayoutContainer from './LayoutContainer'
export default function Layout () {
  return (
    <>
      <div className='bg h-full w-full'>
        <Navbar />
        <div className='md:hidden flex flex-col items-center justify-center bg'>
          <Mobile />
        </div>

        <LayoutContainer>
          <div className='grid grid-cols-4 pt-5'>
            <VideoContent />
            <Messages />
          </div>

          <div className='grid grid-cols-4'>
            <LatestNews />
            <Feed />
          </div>

          <div className='grid grid-cols-4 '>
            <Pokemon />
            <Top />
          </div>
        </LayoutContainer>
      </div>
    </>
  )
}
