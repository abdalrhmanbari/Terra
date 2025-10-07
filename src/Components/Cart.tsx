import React from 'react'
type CartProps ={
    title: string,
    description: string
}
export default function Cart({title, description}:CartProps) {
  return (
    <div className=' flex flex-col items-center  text-center gap-2 '>
        <p className='    font-medium sm:text-[1.5rem] text-xl  leading-[1.875rem] '>{title}</p>
        <p className=' text-[#767676] font-[Helvetica] sm:text-[1.5rem] text-xs'>{description}</p>
    </div>
  )
}
