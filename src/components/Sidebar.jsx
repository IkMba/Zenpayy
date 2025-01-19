import { Banknote, House, LogOut, LogOutIcon, Menu, Send, Target, UserRoundCog } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className=' hidden md:block bg-[--blue] w-[25%] lg:w-[20%] h-screen text-white px-4 py-4 text-lg'>
      <div className='flex items-center my-12 gap-6 text-2xl'>
        <Menu />
        <Link to="/">Zenpay</Link>
      </div>
      <div className='flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md'>
        <House />
        <Link to='/dashboard'>Home</Link>
      </div>
      <div  className='flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md'>
        < UserRoundCog/>
        <Link to='/dashboard/savings'>Savings</Link>
      </div>
      <div className='flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md'>
        < Send/>
        <Link to='/dashboard/invest'>Invest</Link>
      </div>
      <div className='flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md'>
        < Banknote/>
        <Link to='/dashboard/loans'>Loans</Link>
      </div>
      <div className='flex items-center my-4 py-2 gap-4 hover:bg-white hover:text-[--blue] px-4 rounded-md'>
        < LogOutIcon/>
        <Link to='/logout'>Logout</Link>
      </div>
    </div>
  )
}
