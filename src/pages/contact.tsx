import React from 'react'
import Navbar from '../Layout/Navbar'
import Map from "../assets/Component 7.png"
import { Mail, MapIcon, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
export default function Contact() {
  return (
    <div className=' sm:px-16 px-4  text-[#FFFFFF] bg-[#031556] w-full h-[80vh] mb-[500px]'>
              <Navbar/>
        <div className='text-center mt-20  space-y-2'>
        <h1 className=' text-2xl'>Contact Us</h1>
        <p className=' max-w-2xl   m-auto text-sm'>Let’s Build Something Great Together
          <p>
From strategy to site, Terra is your trusted partner in delivering high-impact projects.
          </p>
Get in touch to schedule a consultation or request a proposal.</p>
        </div>
        <div className=' bg-[#FFFFFF] flex  sm:flex-row flex-col-reverse justify-center max-w-5xl m-auto mt-12 p-1 rounded-2xl shadow-2xl'>
          <div className=' rounded-md  max-w-sm me-auto'>
            <ul className=' bg-[#031556] text-[11px] space-y-2 rounded-t-2xl px-2 py-4'>
              <li>Direct Contact</li>
              <li className=' flex items-center gap-1'><Mail className=' w-4 h-4' />Email: info@terragroup.ae</li>
              <li className=' flex items-center gap-1'><Phone className=' w-4 h-4' />Phone: +971 +++ +++ +++</li>
              <li className=' flex items-center gap-1'><MapPin className=' w-4 h-4' />Office Address: [Head Office - City, Country]</li>
              <li className=' '>Working Hours: Sunday - Thursday, 9:00 AM - 6:00 PM</li>
            </ul>
            <img alt='Map' src={Map} className=' border border-[#031556] rounded-b-2xl'/>
          </div>
          <div className=' p-8 sm:w-1/2 m-auto space-y-8 flex flex-col '> 

<div className=" flex flex-col gap-10 items-center justify-center">

  <div className=' flex flex-col sm:flex-row gap-10 w-full '>

  <input
  type="text"
  placeholder="First Name"
  className="w-full text-gray-800 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>

          <input
  type="text"
  placeholder="Last Name"
  className="w-full text-gray-800  border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>
  </div>
  <div className=' flex flex-col sm:flex-row gap-10 w-full'>


   <input
  type="text"
  placeholder="Email"
  className="w-full text-gray-800  border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>

      <input
  type="text"
  placeholder="Company"
  className="w-full  text-gray-800  border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>
  </div>

              
         <input
  type="text"
  placeholder="Message"
  className="w-full text-gray-800    border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none flex "
/>

            </div>
    <div className='  m-auto'>
      <Button btn='Send Message'  style='bg-[#8D0060]  '/>
    </div>
  </div>
          </div>  
    </div>
  )
}
