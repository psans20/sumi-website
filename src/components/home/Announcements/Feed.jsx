import React from 'react'

export default function Feed () {
  return (
    <div className='col-span-3 pl-6'>
      <div class='p-4 pl-3 w-full border-black border-2 h-96  rounded-3xl shadow-slate-500 shadow-md flex flex-col  mt-12 bg2'>
        <span
          className='text-white text-3xl mb-4 text-left'
          style={{ fontFamily: 'Pristina' }}
        >
          Announcements
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Lorem ipsum dolor sit amet. Qui atque nihil est error praesentium et
          dignissimos quidem. A expedita rerum eos voluptatem praesentium qui
          nisi quaerat! Ut iste exercitationem cum quibusdam laborum in animi
          sunt?{' '}
        </span>
      </div>
    </div>
  )
}
