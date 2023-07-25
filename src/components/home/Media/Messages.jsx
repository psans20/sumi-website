import React from 'react'

export default function Messages () {
  return (
    <div className='flex flex-col items-end'>
      <div
        style={{ fontFamily: 'Pristina' }}
        className='p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mb-6 bg2'
      >
        <span className='text-white text-3xl mb-8'>Zero Ops play now</span>
        <span className='text-white text-3xl'>Android</span>
        <span className='text-white text-3xl'>ios</span>
      </div>
      <div
        style={{ fontFamily: 'Pristina' }}
        className='p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center   bg2'
      >
        <span className='text-white text-3xl mb-2'>42 new messages</span>
        <span className='text-white text-3xl'>24 in my cart</span>
        <span className='text-white text-3xl'>add friends</span>
        <span className='text-white text-3xl'>send message</span>
      </div>
    </div>
  )
}
