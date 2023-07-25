import React from 'react'

export default function Layout ({ children }) {
  return (
    <div className='flex flex-col items-center justify-center bg w-full'>
      <div className='2xl:px-52 w-full hidden md:block mt-40 pb-10'>
        {children}
      </div>
    </div>
  )
}
