import MenuBottom from '@/components/MenuBottom'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
        {children}
      </main>
    </div>
      <MenuBottom />
      </>
  )
}
