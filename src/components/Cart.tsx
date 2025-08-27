import React from 'react'
type CartProps ={
    title: string,
    description: string
}
export default function Cart({title, description}:CartProps) {
  return (
    <div className=' flex flex-col items-center  '>
        <h1 className=' text-[#DB9FCE] font-bold text-3xl'>{title}</h1>
        <p className=' text-[#031556] font-bold'>{description}</p>
    </div>
  )
}
