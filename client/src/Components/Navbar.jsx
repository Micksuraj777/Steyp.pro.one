import React from 'react'
import Logo from "./../Assets/logo.png"

function Navbar() {
  return (
    <>
      <ul className='flex justify-between mt-5 px-5 items-center'>
        <li className='flex items-center gap-2'>
          <img src={Logo} alt="logo" className='w-7'/>
          <h1 className='font-bold text-xl'>Cloudmountain</h1>
        </li>
        <li className='flex gap-5'>
          <li>Product</li>
          <li>Resource</li>
          <li>About</li>
          <li>Price</li>
        </li>
        <li className='flex gap-5'>
          <h2>Login in</h2>
          <h2>Sign up</h2>
        </li>
      </ul>
    </>
  )
}

export default Navbar
