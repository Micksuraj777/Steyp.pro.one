import React from 'react'
import Bg from './../Assets/bg.png'
function Home() {
  return (
    <div className='px-5 relative'>
      <h1 className='text-5xl font-extrabold font-cuprum w-[500px] mt-5 leading-snug mb-5'>
        Secure cloud-native infrastructure with Cloudmountain
      </h1>
      <img src={Bg} alt="bg"className='h-[350px] w-full' />
      <div className='absolute bottom-[180px] right-[50px]'>
      <p className='text-white w-[300px] mb-6'>With cloud-native security integrated into your application design, you can develop rapidly and innovate continously.</p>
      <button className='bg-white py-1 px-6 rounded-sm font-semibold'>Sign up</button>
      </div>
    </div>
  )
}

export default Home
