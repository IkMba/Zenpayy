import React from 'react'
import { Banknote, House, LogOut, LogOutIcon, Menu, Send, Target, UserRoundCog } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MenuBottom() {
  return (
       <div className=' bg-[--blue] text-white px-2 py-2 text-md flex justify-between fixed bottom-0 right-0 left-0 md:hidden'>
   
      <div className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md'>
        <House />
        <Link to='/dashboard'>Home</Link>
      </div>
      <div  className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md'>
        < UserRoundCog/>
        <Link to='/dashboard/savings'>Savings</Link>
      </div>
      <div className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md'>
        < Send/>
        <Link to='/dashboard/invest'>Invest</Link>
      </div>
      <div className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md'>
        < Banknote/>
        <Link to='dashboard/loans'>Loans</Link>
      </div>
      {/* <div className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md'>
        < LogOutIcon/>
        <Link to='/dashboard/logout'>Logout</Link>
      </div> */}
      </div>
  )
}
