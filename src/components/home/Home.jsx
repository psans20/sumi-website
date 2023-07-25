import React from 'react'
import Mobile from './Mobile'
import Navbar from '../Navbar'
import Layout from '../Layout'
import Announcements from '../layout/Middle/Middle'
import Game from '../layout/Bottom/Bottom'
import MediaC from '../layout/Top/Top'
import Messages from '../shared/Media/Messages'
import LatestNews from '../shared/Announcements/LatestNews'

import Pokemon from './Game/Pokemon'
import Top from './Game/Top'
import Feed from '../shared/Announcements/Feed'
import VideoContent from '../shared/Media/VideoContent'

export default function Home () {
  return (
    <>
      <div className='bg h-full w-full'>
        <Navbar />
        <div className='md:hidden flex flex-col items-center justify-center bg'>
          <Mobile />
        </div>

        <Layout>
          <MediaC>
        
              <VideoContent/>
          
            <Messages />
          </MediaC>
          <Announcements>
            <LatestNews />
            <Feed />
          </Announcements>
          <Game>
            <Pokemon />
            <Top />
          </Game>
        </Layout>
      </div>
    </>
  )
}
