import React from 'react'
type CountryProps = {
    description:string,
    src:string
}
export default function Country({description, src}:CountryProps) {
  return (
    <div className=' text-[#031556] space-y-2  text-center'>
        <img alt={description} src={src} className=' sm:w-[300px] sm:h-[200px] w-[250px] h-[180px]'/>
            <p>{description}</p>
    </div>
  )
}
