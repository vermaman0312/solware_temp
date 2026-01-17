import React from 'react'

const Header = () => {
  return (
    <div className='h-16 bg-black sticky top-0 z-50 flex items-center justify-between'>
      <div className='w-16 h-full'></div>
      <div className='w-[80%] h-full bg-gray-900 rounded-t-full'></div>
      <div className='w-16 h-full'></div>
    </div>
  )
}

export default Header