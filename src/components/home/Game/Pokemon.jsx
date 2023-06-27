import React from 'react'

export default function Pokemon () {
  return (
    <div>
      <div class='p-4 border-black border-2 h-48  rounded-full shadow-slate-500 shadow-md flex flex-col items-center justify-center mt-12 bg2'>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Last Pokemon Caught
        </span>
        <img
          src='https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png'
          className='w-28 pt-6'
          alt=''
        />
      </div>
    </div>
  )
}
