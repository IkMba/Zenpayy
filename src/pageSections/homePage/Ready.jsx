import React from 'react'
import atmCard from "@/assets/card-reader.webp"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Ready() {
  return (
    <div className='bg-[--dark-shade] text-[--light-blue] p-8 md:flex md:px-24 md:py-2 justify-around items-center'>
      <div className='my-8 md:w-[28rem]'>
        <h2 className=' my-4 text-5xl'>Ready to simplify your financial transactions?</h2>
        <p className='text-xl text-[--gray]'>Join thousands of our satisfied users and experience the difference.</p>
        <Button className='bg-[--light-blue] text-[--dark-shade] text-md my-4'><Link to="/register">Open an account</Link></Button>
      </div>
      <img src={atmCard} alt="" className='w-full md:w-[28rem] ' />
    </div>
  )
}
