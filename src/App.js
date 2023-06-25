import React from 'react';
import '../src/App.css';

function Home(props) {
  return (
    <div className="flex flex-col items-center justify-center bg">

      <div className='md:flex md:flex-row'>

      <img src="https://media.discordapp.net/attachments/1121636278765617172/1121636393714720768/mobile_02.png" className='ml-4 w-72 md:w-60 md:flex-row md:justify-start md:fixed md:left-0 md:top-[-15px]'/>

      <div className="mx-auto my-auto flex flex-col items-center mt-8 md:flex-row md:space-x-6 z-10">
        <button className="border-black border-2 h-[55px] w-60 md:h-[70px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4">
          <span className="text-white text-2xl md:text-3xl text-center text-opacity-80" style={{ fontFamily: 'Pristina' }}>home</span>
        </button>
        <button className="border-black border-2 h-[50px] w-60 md:h-[65px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4">
          <span className="text-white text-2xl md:text-3xl text-center text-opacity-80" style={{ fontFamily: 'Pristina' }}>forum</span>
        </button>
        <button className="border-black border-2 h-[50px] w-60 md:h-[65px] md:w-72 rounded-full shadow-slate-500 shadow-md mb-4">
          <span className="text-white text-2xl md:text-3xl text-center text-opacity-80" style={{ fontFamily: 'Pristina' }}>shop</span>
        </button>

<div className='md:flex-col'>
        <h2 className="text-center text-white text-xl mt-4" style={{ fontFamily: 'Acumin' }}>Welcome Sumimasen!</h2>
        <h2 className="text-center text-white text-xl" style={{ fontFamily: 'Acumin' }}>You have (1) New Inbox</h2>
</div>
      </div>

      <div className='flex flex-row my-5 md:h-18 md:mt-8 md:fixed md:right-4'>
        <img src="https://media.discordapp.net/attachments/1121636278765617172/1121666700883001404/mobile_18.png" className="cursor-pointer"/>
        <img src="https://media.discordapp.net/attachments/1121636278765617172/1121666701201776750/mobile_19.png" className="cursor-pointer"/>
        <img src="https://media.discordapp.net/attachments/1121636278765617172/1121666701583450133/mobile_21.png" className="cursor-pointer"/>
        <img src="https://media.discordapp.net/attachments/1121636278765617172/1121666701881254019/mobile_22.png" className="cursor-pointer"/>
      </div>

      </div>

      <div class="p-4 border-black border-2 h-72 w-80 rounded-3xl shadow-slate-500 shadow-md flex-col justify-center items-center bg2">
<span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Latest Video</span>
<a href='https://www.youtube.com/watch?v=11U66BtB0Lw' target="_blank"><img src="https://i.ytimg.com/an_webp/11U66BtB0Lw/mqdefault_6s.webp?du=3000&sqp=CLjx2aQG&rs=AOn4CLB42I1NPmvKNxJcmDfcnPUEUCRU6g" className="w-72 h-48"/></a>
  </div>



  <div class="p-4 border-black border-2 h-96 w-68 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2">
  <span className="text-white text-3xl mb-4" style={{ fontFamily: 'Pristina' }}>Latest News</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>User Ranking List+</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Latest Announcements+ </span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Best Maps on Zero Ops+ </span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Release date of Zero Ops+ </span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Newest Blogs+ </span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Zero Ops Highlights+ </span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>New Maps for Zero Ops+ </span>
  <span className="text-white text-3xl mt-6 ml-12" style={{ fontFamily: 'Pristina' }}>View All </span>
</div>


<div class="p-4 border-black border-2 h-48 w-[350px] rounded-full shadow-slate-500 shadow-md flex flex-col items-center justify-center mt-12 bg2">
<span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Last Pokemon Caught</span>
<img src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" className='w-28 pt-6'/>

  </div>



  <div class="p-4 border-black border-2 h-96 w-96 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2">
  <span className="text-white text-3xl mb-4" style={{ fontFamily: 'Pristina' }}>Announcements</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Lorem ipsum dolor sit amet. Qui atque nihil est error praesentium et dignissimos quidem. A expedita rerum eos voluptatem praesentium qui nisi quaerat!

Ut iste exercitationem cum quibusdam laborum in animi sunt? </span>
</div>

<div class="p-4 border-black border-2 h-48 w-[350px] rounded-full shadow-slate-500 shadow-md flex flex-col items-center justify-center mt-12 bg2">
<span className="text-white text-3xl pb-2" style={{ fontFamily: 'Pristina' }}>Top 10 Users</span>
<div className='flex flex-row'>
<img src="https://cdn.discordapp.com/avatars/1064925337760301126/75a0ad2c1e8e292ff1e734b89aeecdd2.png?size=160" className='w-28 rounded-full border-black border-2'/>
<img src="https://cdn.discordapp.com/avatars/957842531448672277/74a662a2dec66ab3e032ed6754e73f65.png?size=160" className='ml-4 w-28 rounded-full border-black border-2'/>
  </div>
  </div>

  


  <div class="p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 bg2">
  <span className="text-white text-3xl mb-8" style={{ fontFamily: 'Pristina' }}>Zero Ops play now</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>Android</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>ios</span>
</div>

<div class="p-4 border-black border-2 h-48 w-60 rounded-3xl shadow-slate-500 shadow-md flex flex-col items-center mt-12 mb-24 bg2">
  <span className="text-white text-3xl mb-2" style={{ fontFamily: 'Pristina' }}>42 new messages</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>24 in my cart</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>add friends</span>
  <span className="text-white text-3xl" style={{ fontFamily: 'Pristina' }}>send message</span>
</div>

    </div>
  );
}

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
