import React from 'react'
type CartProps ={
    title: string,
    description: string
}
export default function Cart({title, description}:CartProps) {
  return (
    <div className=' flex flex-col items-center  '>
        <h1 className=' text-[#DB9FCE] font-bold sm:text-3xl text-xl'>{title}</h1>
        <p className=' text-[#031556] font-bold sm:text-base text-xs'>{description}</p>
    </div>
  )
}
