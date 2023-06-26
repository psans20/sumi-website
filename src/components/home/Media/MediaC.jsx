import React from 'react'
import Video from './Video'; 
import Messages from './Messages';
export default function MediaC () {
  return (
    <div className='grid grid-cols-4 pt-5'>
      <Video/>
      <Messages/>
    </div>
  )
}
