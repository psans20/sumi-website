import React from 'react'

export default function Video () {
  return (
    <div className=' col-span-3   mr-4'>
      <div class='p-4 w-full h-full border-black border-2 rounded-3xl shadow-slate-500 shadow-md flex-col justify-center items-center bg2'>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
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
      </div>
    </div>
  )
}
