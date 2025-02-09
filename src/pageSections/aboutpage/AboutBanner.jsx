import React from 'react'
import aboutBanner from '@/assets/aboutBanner.webp'

export default function AboutBanner() {
  return (
    <div className='about-banner px-8 py-24 text-white' >
        <div className='lg:w-[70%] lg:px-[100px] lg:py-[50px]'>
      <h2 className='text-xl font-semibold text-[--dark-shade]'>About us</h2>
      <h3 className='text-[2.25rem] font-extrabold uppercase my-2 lg:my-6 md:text-4xl lg:text-6xl'>We change the way you do money</h3>
      <p className='mb-8'>Zenpay helps you spend, send, and save smarter. Welcome to your new favourite way to do all things money</p>
      <a href="/register" className='bg-[--dark-shade]  px-6 py-4 rounded-[50px] font-semibold '>Try Zenpay now</a>
    </div>
    </div>
  )
}
