import React from 'react'

export default function HomeVideo () {
  return (
    <>
      <span className='text-white text-3xl' style={{ fontFamily: 'Pristina' }}>
        Latest Video
      </span>
      <a
        href='https://www.youtube.com/watch?v=11U66BtB0Lw'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt=' '
          src='https://i.ytimg.com/an_webp/11U66BtB0Lw/mqdefault_6s.webp?du=3000&sqp=CLjx2aQG&rs=AOn4CLB42I1NPmvKNxJcmDfcnPUEUCRU6g'
          className='w-72 h-48'
        />
      </a>
    </>
  )
}
