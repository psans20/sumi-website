import React from 'react'
import Mobile from './Mobile'
import Navbar from '../Navbar'
import Layout from '../Layout'
import Announcements from '../layout/Announce/Announcements'
import Game from '../layout/Game/Game'
import MediaC from '../layout/Media/MediaC'
import Messages from './Media/Messages'
import LatestNews from './Announcements/LatestNews'

import Pokemon from './Game/Pokemon'
import Top from './Game/Top'
import Feed from './Announcements/Feed'
import VideoContent from './Media/VideoContent'
import Video from '../layout/Media/Video'

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
            <Video>
              <VideoContent/>
            </Video>
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
