import React from 'react'
import { Button } from '../ui/button'

export default function DashBanner({img,bannerText,btnText}) {
  return (
    <div className=' bg-[--light-blue] text-[--dark-blue] px-4 py-2 text-2xl rounded-2xl w-full mx-auto'>
      <img src={img} alt="" className='w-full h-[55vh]' />
        <div className=''>
      <h3>{bannerText}</h3>
      <Button className='bg-[--blue] mt-4 text-white'>{btnText}</Button>
      </div>
    </div>
  )
}
