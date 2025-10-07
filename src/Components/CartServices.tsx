import React, { type ReactNode } from 'react'
type CartProps ={
    title: string,
    description?: string,
    icon: ReactNode,
    style:string,
    shadow?:string
}
export default function CartServices({title, description, icon, style, shadow}:CartProps) {
  return (
    <div className={` flex flex-col  gap-4  justify-center items-center text-center py-8 px-4 bg-[#FFFFFF]   rounded-2xl border border-[#767676] ${shadow || "shadow-[0_2px_50px_0_rgba(0,0,0,0.40)]"  }  ${style} `}>
            <div className=' '>{icon}</div>
            <p className=' black text-[1.2rem]'>{title}</p>
            <p className=' black  text-[0.9rem]  leading-[1.75rem] opacity-[0.8] '>{description}</p>
    </div>
  )
}
