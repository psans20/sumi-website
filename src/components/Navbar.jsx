import React from 'react'

export default function Navbar () {
  return (
    <div className='md:flex md:flex-row fixed top-0 h-20 w-full'>
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      <div className='flex justify-between w-full px-20 pt-8 items-center'>
        <img
          src='https://media.discordapp.net/attachments/1121636278765617172/1121636393714720768/mobile_02.png'
          alt=''
          className='ml-4 w-72 md:w-60 md:flex-row '
        />

        <div className=' flex flex-col items-center mt-8 md:flex-row md:space-x-6 z-10'>
          <button className='border-black border-2 h-[55px] w-60 md:h-[70px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4'>
            <span
              className='text-white text-2xl md:text-3xl text-center text-opacity-80'
              style={{ fontFamily: 'Pristina' }}
            >
              home
            </span>
          </button>
          <button className='border-black border-2 h-[50px] w-60 md:h-[65px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4'>
            <span
              className='text-white text-2xl md:text-3xl text-center text-opacity-80'
              style={{ fontFamily: 'Pristina' }}
            >
              forum
            </span>
          </button>
          <button className='border-black border-2 h-[50px] w-60 md:h-[65px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4'>
            <span
              className='text-white text-2xl md:text-3xl text-center text-opacity-80'
              style={{ fontFamily: 'Pristina' }}
            >
              shop
            </span>
          </button>

          <div className='flex-col justify-center'>
            <h2
              className='text-center text-white text-xl '
              style={{ fontFamily: 'Acumin' }}
            >
              Welcome Sumimasen!
            </h2>
            <h2
              className='text-center text-white text-xl'
              style={{ fontFamily: 'Acumin' }}
            >
              You have (1) New Inbox
            </h2>
          </div>
        </div>

        <div className='flex flex-row my-5 md:h-18 md:mt-8  md:right-4'>
          <img
            src='https://media.discordapp.net/attachments/1121636278765617172/1121666700883001404/mobile_18.png'
            className='cursor-pointer'
          />
          <img
            src='https://media.discordapp.net/attachments/1121636278765617172/1121666701201776750/mobile_19.png'
            className='cursor-pointer'
          />
          <img
            src='https://media.discordapp.net/attachments/1121636278765617172/1121666701583450133/mobile_21.png'
            className='cursor-pointer'
          />
          <img
            src='https://media.discordapp.net/attachments/1121636278765617172/1121666701881254019/mobile_22.png'
            className='cursor-pointer'
          />
        </div>
      </div>
    </div>
  )
}
