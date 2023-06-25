import React from 'react'

export default function Navbar () {
  return (
    <div className='md:flex md:flex-row fixed top-0  w-full'>
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      <div className='flex justify-between w-full md:px-28 items-center'>
        <div className='flex items-center'>
          <img
            src='https://media.discordapp.net/attachments/1121636278765617172/1121636393714720768/mobile_02.png'
            alt=''
            className='h-36 '
          />
          <div>
            <NavButton title={'home'} />
            <NavButton title={'forum'} />
            <NavButton title={'shop'} />
          </div>
        </div>
        <div className='flex items-center'>
          <div
            className='flex-col justify-center'
            style={{ fontFamily: 'Acumin' }}
          >
            <h2 className='text-center text-white text-xl'>
              Welcome Sumimasen!
            </h2>
            <h2 className='text-center text-white text-xl'>
              You have (1) New Inbox
            </h2>
          </div>
          <div className='flex flex-row my-5 md:h-18 md:mt-8  md:right-4'>
            <img
              src='https://media.discordapp.net/attachments/1121636278765617172/1121666700883001404/mobile_18.png'
              className='cursor-pointer'
              alt=''
            />
            <img
              src='https://media.discordapp.net/attachments/1121636278765617172/1121666701201776750/mobile_19.png'
              className='cursor-pointer'
              alt=''
            />
            <img
              src='https://media.discordapp.net/attachments/1121636278765617172/1121666701583450133/mobile_21.png'
              className='cursor-pointer'
              alt=''
            />
            <img
              src='https://media.discordapp.net/attachments/1121636278765617172/1121666701881254019/mobile_22.png'
              className='cursor-pointer'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function NavButton ({ title }) {
  return (
    <button className='border-black relative mr-4 border-2 h-[55px]  w-60 md:h-[55px] md:w-56 rounded-full shadow-slate-500 bg-bg2 hover:bg-opacity-80 shadow-md'>
      <div className='absolute h-full w-full rounded-full top-3 top-box  z-20'></div>
      <div className='absolute h-full w-full  top-0 z-10 rounded-full '></div>
      {/* <div className=' rounded-t-3xl bg-gradient-to-b w-full h-1/2 absolute from-white  top-0'></div> */}
      <span
        className='text-white text-2xl md:text-3xl text-center text-opacity-80  rounded-full absolute flex h-full w-full items-center justify-center top-0'
        style={{ fontFamily: 'Pristina' }}
      >
        {title}
      </span>
    </button>
  )
}
