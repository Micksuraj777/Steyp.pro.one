import React from 'react'
import Logo from "./../Assets/logo.png"

function Navbar() {
  return (
    <>
      <ul className='flex justify-between mt-5 pb-5 mx-5 items-center h-[40px] border-b border-black'>
        <li className='flex items-center gap-2'>
          <img src={Logo} alt="logo" className='w-7'/>
          <h1 className='font-bold text-xl'>Cloudmountain</h1>
        </li>
        <li className='flex gap-5'>
          <li className='hover:text-purple-500 cursor-pointer hover:underline'>Product</li>
          <li className='hover:text-purple-500 cursor-pointer hover:underline'>Resource</li>
          <li className='hover:text-purple-500 cursor-pointer hover:underline'>About</li>
          <li className='hover:text-purple-500 cursor-pointer hover:underline'>Pricing</li>
        </li>
        <li className='flex gap-5 items-center'>
          <h2 className='cursor-pointer hover:font-semibold'>Login in</h2>
          <button className='bg-black text-white py-1 px-6 rounded-sm'>Sign up</button>
        </li>
      </ul>
    </>
  )
}

export default Navbar
