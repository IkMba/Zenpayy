import React from 'react'

export default function DashActions({icon,info,title}) {
  return (
      <div className="border-[--blue] border p-4 flex gap-2 text-[--blue] my-4 md:max-w-[550px]">
      {icon}
      <div>
        <h2 className='text-[--gray2]'>{title}</h2>
        <h3 className='text-2xl '>{info}</h3>
      </div>
    </div>
  )
}
