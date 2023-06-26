import React from 'react'

export default function Mobile () {
  return (
    <>

      <div class='p-4  border-black border-2 md:mt-40 h-72 w-80 rounded-3xl shadow-slate-500 shadow-md flex-col justify-center items-center bg2'>
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
      {/* Latest News  */}
      <div class='p-4 border-black border-2 h-96 w-68 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2'>
        <span
          className='text-white text-3xl mb-4'
          style={{ fontFamily: 'Pristina' }}
        >
          Latest News
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          User Ranking List+
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Latest Announcements+{' '}
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Best Maps on Zero Ops+{' '}
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Release date of Zero Ops+{' '}
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Newest Blogs+{' '}
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          Zero Ops Highlights+{' '}
        </span>
        <span
          className='text-white text-3xl'
          style={{ fontFamily: 'Pristina' }}
        >
          New Maps for Zero Ops+{' '}
        </span>
        <span
          className='text-white text-3xl mt-6 ml-12'
          style={{ fontFamily: 'Pristina' }}
        >
          View All{' '}
        </span>
      </div>

      <div class='p-4 border-black border-2 h-48 w-[350px] rounded-full shadow-slate-500 shadow-md flex flex-col items-center justify-center mt-12 bg2'>
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

      <div class='p-4 border-black border-2 h-96 w-96 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2'>
        <span
          className='text-white text-3xl mb-4'
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

      <div class='p-4 border-black border-2 h-48 w-[350px] rounded-full shadow-slate-500 shadow-md flex flex-col items-center justify-center mt-12 bg2'>
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

      <div
        style={{ fontFamily: 'Pristina' }}
        class='p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2'
      >
        <span className='text-white text-3xl mb-8'>Zero Ops play now</span>
        <span className='text-white text-3xl'>Android</span>
        <span className='text-white text-3xl'>ios</span>
      </div>
      
      <div
        style={{ fontFamily: 'Pristina' }}
        class='p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 mb-24 bg2'
      >
        <span className='text-white text-3xl mb-2'>42 new messages</span>
        <span className='text-white text-3xl'>24 in my cart</span>
        <span className='text-white text-3xl'>add friends</span>
        <span className='text-white text-3xl'>send message</span>
      </div>
    </>
  )
}
