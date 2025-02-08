import React from 'react'

export default function ({size,bgColor,title,amount,icon,text}) {
  return (
    <div className={`${bgColor} ${size === 'sm' ? 'w-16' : size === "md" ? "w-48 px-6 py-8 " :  'px-6 py-12 '  } text-white text-sm rounded-lg flex items-center gap-2`}>
      {icon}
      <div>
        <h4 className='text-[--gray]'>{title}</h4>
        {text && <h4>{text}</h4>}
        <h4 className='text-2xl '>{amount}</h4>
      </div>
    </div>
  )
}
