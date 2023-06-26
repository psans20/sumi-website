import React from 'react'

export default function Top () {
  return (
    <div className='col-span-3'>
      <div class='p-4  border-black border-2 h-48  rounded-full shadow-slate-500 shadow-md flex flex-col px-12 justify-center mt-12 bg2'>
        <span
          className='text-white text-3xl pb-2'
          style={{ fontFamily: 'Pristina' }}
        >
          Top 10 Users
        </span>
        <div className='flex flex-row'>
          <img
            src='https://cdn.discordapp.com/avatars/1064925337760301126/75a0ad2c1e8e292ff1e734b89aeecdd2.png?size=160'
            className='w-28 rounded-full border-black border-2'
            alt=''
          />
          <img
            src='https://cdn.discordapp.com/avatars/957842531448672277/74a662a2dec66ab3e032ed6754e73f65.png?size=160'
            className='ml-4 w-28 rounded-full border-black border-2'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
