import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import GroupAbout1 from "../assets/groupAbout1.png"
import { BookText, ScanEye } from 'lucide-react'
import Group from "../assets/group.png"
import Identification from '../components/Identification'
import CardAbout from '../components/CardAbout'
import Time from "../assets/Time.png"
import CardWithDecoration from '../components/CardWithDecoration'
import Country from '../components/Country'
import Egypt from "../assets/egypt.png"
import Emirates from "../assets/united-arab.png"
import Saudi from "../assets/saudia.png"
export default function About() {
      const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <div className=' px-4 sm:px-16  text-[#031556]'>
        <Navbar color='text-[#031556]'/>
        <div className=' mt-20'>
            <div className=' flex flex-col sm:flex-row items-center justify-between  gap-10'>

                <div>
                    <h1 className=' text-2xl'>About Terra</h1>
                    <p className='  sm:max-w-[30rem]'>Terra is a regional project management consultancy transforming how complex projects are designed, managed, and delivered. Known for our precision and integrity, we e.</p>
                </div>
                                <div className=' sm:max-w-1/2 '>
                        <img alt='About Terra' src={GroupAbout1} className=' object-contain'/>
                </div>
            </div>
            <div className="flex items-center justify-center gap-20 mt-20">
      <div
        onClick={() => setActiveTab("vision")}
        className={`flex gap-1  w-fit cursor-pointer pb-1  relative 
          ${activeTab === "vision" ? "border-b-2 border-[#8D0060]" : ""}`}
      >
 {activeTab === "vision" && (
        <>
      <div className="absolute left-2 -top-2 w-2 h-[1px] bg-[#8D0060] rotate-[-70deg] rounded"></div>
      <div className="absolute -left-3 -top-1 w-4 h-[1px] bg-[#8D0060] rotate-[50deg] rounded"></div>
      <div className="absolute -left-6 top-2 w-3 h-[1px] bg-[#8D0060] rotate-[25deg] rounded"></div>
        </>)}
        <ScanEye /> Our Vision
        </div>
   
      <p
        onClick={() => setActiveTab("mission")}
        className={`flex gap-1  w-fit cursor-pointer pb-1  relative
          ${activeTab === "mission" ? "border-b-2 border-[#8D0060]" : ""}`}
      >
 {activeTab === "mission" && (
        <>
      <div className="absolute left-2 -top-2 w-2 h-[1px] bg-[#8D0060] rotate-[-70deg] rounded"></div>
      <div className="absolute -left-3 -top-1 w-4 h-[1px] bg-[#8D0060] rotate-[50deg] rounded"></div>
      <div className="absolute -left-6 top-2 w-3 h-[1px] bg-[#8D0060] rotate-[25deg] rounded"></div>
        </>)}
        <BookText /> Our Mission
      </p>
    </div>
    <div className='relative w-full mt-20 h-40 rounded-2xl flex '
      style={{ boxShadow: "2px 4px 50px rgba(0,0,0,0.2)" }}
    >
  <img 
    alt='group' 
    src={Group} 
    className='absolute top-2 left-2 rotate-180 sm:w-20 w-10 ' 
  />
  <img 
    alt='group' 
    src={Group} 
    className='absolute bottom-2 right-2 sm:w-20 w-10' 
  />
        <p className='  flex justify-center items-center m-auto text-center  sm:w-[40rem]  text-sm sm:text-base'>To build a future-driven design and project management consultancy firm known for precision, innovation, and execution excellence.</p>
</div>
<Identification isActive={true} style='flex-row-reverse'/>
<div className=' mt-12 space-y-8'>
    <h1 className='  text-2xl'>Our Core Services</h1>
    <div className=' grid  grid-cols-1 sm:grid-cols-2 gap-4'>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    <CardAbout title='Project & Program Management' src={Time} option="Transparent cost forecasting, budgeting, and value engineering services"/>
    </div>
</div>
<div className=' mt-12 space-y-10   '>
<h1 className=' text-center text-2xl'>Industries We Serve</h1>
<div className='  grid grid-cols-1 sm:grid-cols-3 gap-10  justify-items-center'>
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style="  ps-3" styleColor='bg-[#031556]' />
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style=" ps-3"  styleColor='bg-[#DB9FCE]' />
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style=" ps-3" styleColor=' bg-[#8D0060]' />
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style=" ps-3" styleColor='bg-[#004B8F]'/>
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style=" ps-3" styleColor=' bg-[#8D0060]' />
          <CardWithDecoration title="Regional Delivery Excellence"  isColor style=" ps-3" styleColor='bg-[#031556]' />
</div>
</div>
<div className=' mt-16 space-y-2'>
    <h1 className=' text-2xl'>Operating Territories</h1>
    <p>We work across the Middle East and North Africa, with active operations in:</p>
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center'>
    <Country description='United Arab Emirates' src={Emirates}/>
    <Country description='Egypt' src={Egypt}/>
    <Country description='Saudi Arabia' src={Saudi}/>
    </div>
</div>
        </div>
    </div>
  )
}
