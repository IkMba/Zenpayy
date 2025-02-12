import MenuBottom from '@/components/MenuBottom'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
      <h4 id="google_translate_element" className=" absolute top-0  right-[15%] md:right-[25%] text-white "></h4>
        {children}
      </main>
    </div>
      <MenuBottom />
      </>
  )
}
