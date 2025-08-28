import React from 'react'
import Navbar from '../Layout/Navbar'
import Map from "../assets/Component 7.png"
import { Mail, MapIcon, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
export default function Contact() {
  return (
    <div className=' px-16 py-8 text-[#FFFFFF] bg-[#031556] w-full h-[80vh] mb-96'>
              <Navbar/>
        <div className='text-center mt-20  space-y-2'>
        <h1 className=' text-2xl'>Contact Us</h1>
        <p className=' max-w-2xl   m-auto text-sm'>Let’s Build Something Great Together
          <p>
From strategy to site, Terra is your trusted partner in delivering high-impact projects.
          </p>
Get in touch to schedule a consultation or request a proposal.</p>
        </div>
        <div className=' bg-[#FFFFFF] flex  justify-center max-w-5xl m-auto mt-12 p-1 rounded-2xl shadow-2xl'>
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
          <div className=' grid grid-cols-1 justify-items-center '>
            <div className=' grid sm:grid-cols-2 grid-cols-1  justify-items-center gap-10'>
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

   <input
  type="text"
  placeholder="Email"
  className="w-full text-gray-800  border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>

      <input
  type="text"
  placeholder="Company"
  className="w-full text-gray-800  border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>

              
         <input
  type="text"
  placeholder="Message"
  className="w-full text-gray-800    border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0 outline-none"
/>

            </div>
      <Button btn='Send Message'  style='bg-[#8D0060] right-0 bottom-0 w-fit h-fit '/>
            </div>
          </div>  
    </div>
  )
}
