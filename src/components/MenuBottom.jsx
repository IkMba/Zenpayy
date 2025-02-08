import React from 'react'
import { Banknote, House, LogOut, LogOutIcon, Menu, Send, Target, UserRoundCog } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser, setIsAuthenticated } from "../utils/registerSlice"


export default function MenuBottom() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {

    dispatch(setCurrentUser(''))
    dispatch(setIsAuthenticated(false))
    navigate('/')
  }
  return (
       <div className=' bg-[--blue] text-white px-2 py text-sm flex justify-between fixed bottom-0 right-0 left-0 md:hidden'>
   
      <div className='flex flex-col items-center py-2 px-2 gap hover:bg-white hover:text-[--blue] rounded-md'>
        <House />
        <Link to='/dashboard'>Home</Link>
      </div>
      <div  className='flex flex-col items-center py-2 px-2 gap hover:bg-white hover:text-[--blue] rounded-md'>
        < UserRoundCog/>
        <Link to='/dashboard/savings'>Savings</Link>
      </div>
      <div className='flex flex-col items-center py-2 px-2 gap hover:bg-white hover:text-[--blue] rounded-md'>
        < Send/>
        <Link to='/dashboard/invest'>Invest</Link>
      </div>
      <div className='flex flex-col items-center py-2 px-2 gap hover:bg-white hover:text-[--blue] rounded-md'>
        < Banknote/>
        <Link to='dashboard/loans'>Loans</Link>
      </div>
      <div className='flex flex-col items-center py-2 px-2 gap-2 hover:bg-white hover:text-[--blue] rounded-md' onClick={() => logout()}>
        < LogOutIcon/>
        <Link>Logout</Link>
      </div>
      </div>
  )
}
