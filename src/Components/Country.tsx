import { Check } from 'lucide-react'
import React from 'react'
type CountryProps = {
    description:string,
    src:string,
    isActive?:boolean,
    styleDesc?: string,
    styleImg?: string,
    style?: string,
}
export default function Country({description, src, isActive, styleDesc,styleImg, style}:CountryProps) {
  return (
    <div className={`  space-y-2  text-center  ${style}`}>
        <img alt={description} src={src} className={`  h-[25rem] object-cover ${styleImg}`}/>
        {isActive ?
        <div className=' flex gap-1 text-center items-center justify-center'>
          <Check className=' w-4 h-4'/>
          <p className={`${styleDesc}`}>{description}</p>
        </div>:
          <p className={`${styleDesc}`}>{description}</p>
        }
    </div>
  )
}
