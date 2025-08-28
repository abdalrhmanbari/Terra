import React from 'react'
type CountryProps = {
    description:string,
    src:string
}
export default function Country({description, src}:CountryProps) {
  return (
    <div className=' text-[#031556] space-y-2  text-center'>
        <img alt={description} src={src} className=' w-[300px] h-[200px]'/>
            <p>{description}</p>
    </div>
  )
}
