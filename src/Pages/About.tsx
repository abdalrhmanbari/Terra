import React, { useState } from 'react'
import background from "../assets/Frame 224.png"

import { Check, ChevronRight } from 'lucide-react'
import BgSection from "../assets/Frame 300.png"
import IntroductorySection from '../Components/IntroductorySection';
export default function About() {
      const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

const Industries = [
  {
    FirstIndustry:"Urban Development",
    SecondIndustry:"Industrial & Logistics"
  },
  {
    FirstIndustry:"Infrastructure & Transportation",
    SecondIndustry:"Hospitality & Leisure"
  },
  {
    FirstIndustry:"Mixed-Use Real Estate",
    SecondIndustry:"Healthcare & Education"
  },
]
  return (
    <div className='  mb-34 '
    >
      <div className=' flex flex-col justify-between WhiteText h-full '
        style={{
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
backgroundPosition: "center"
  }}
      
      >

            <div className=' text-left pt-40 pb-24 px-4 sm:px-16  w-full '>

                    <h1 className=' flex  WhiteText '>About Terra</h1>
                    <p className='  text-[1.2rem] leading-[2.1875rem] sm:max-w-[32rem]'>Terra is a regional project management consultancy transforming how complex projects are designed, managed, and delivered. Known for our precision and integrity, we e.</p>
            </div>
            <div  className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-24 gap-12  bg-[rgba(18,18,18,0.30)] py-4 px-4 sm:px-16  '>
              <div className=' text-center'>
                <span className=' text-[1.5rem]'>PMP</span>
                <p className=' text-[1.125rem]'>Certified leadership</p>
              </div>
              <div className=' text-center'>
                <span className=' text-[1.5rem]'>+20</span>
                <p className=' text-[1.125rem]'>Years regional experince</p>
              </div>
              <div className=' text-center'>
                <span className=' text-[1.5rem]'>ISO</span>
                <p className=' text-[1.125rem]'>Quality framework</p>
              </div>
              <div className=' text-center'>
                <span className=' text-[1.5rem]'>End-to-End</span>
                <p className=' text-[1.125rem]'>Lifecycle oversight</p>
              </div>
            </div>
      </div>


            <div className="flex items-center justify-center gap-4 sm:gap-20 mt-8 px-4 sm:px-16">
      <div
        onClick={() => setActiveTab("vision")}
        className={`flex gap-1  w-fit cursor-pointer pb-1    sm:text-[1.5rem] leading-[2.1875rem]
          ${activeTab === "vision" ? "border-b-3 border-[#8D0060] text-[#8D0060]" : ""}`}
          >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M3.33337 11.416C3.47204 8.61598 3.88671 6.86931 5.12937 5.62931C6.36937 4.38665 8.11604 3.97198 10.916 3.83331M28.6667 11.416C28.528 8.61598 28.1134 6.86931 26.8707 5.62931C25.6307 4.38665 23.884 3.97198 21.084 3.83331M21.084 29.1666C23.884 29.028 25.6307 28.6133 26.8707 27.3706C28.1134 26.1306 28.528 24.384 28.6667 21.584M10.916 29.1666C8.11604 29.028 6.36937 28.6133 5.12937 27.3706C3.88671 26.1306 3.47204 24.384 3.33337 21.584" stroke={activeTab === "vision" ? "#8D0060" : "#121212"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M26.18 15.5906C26.504 15.996 26.6667 16.2 26.6667 16.5C26.6667 16.8 26.504 17.004 26.18 17.4093C24.7227 19.2333 21.0014 23.1666 16 23.1666C10.9987 23.1666 7.27737 19.2333 5.82004 17.4093C5.49604 17.004 5.33337 16.8 5.33337 16.5C5.33337 16.2 5.49604 15.996 5.82004 15.5906C7.27737 13.7666 10.9987 9.83331 16 9.83331C21.0014 9.83331 24.7227 13.7666 26.18 15.5906Z" stroke={activeTab === "vision" ? "#8D0060" : "#121212"} strokeWidth="2.5"/>
  <path d="M18.6668 16.5C18.6668 15.7927 18.3859 15.1145 17.8858 14.6144C17.3857 14.1143 16.7074 13.8333 16.0002 13.8333C15.2929 13.8333 14.6146 14.1143 14.1145 14.6144C13.6144 15.1145 13.3335 15.7927 13.3335 16.5C13.3335 17.2072 13.6144 17.8855 14.1145 18.3856C14.6146 18.8857 15.2929 19.1666 16.0002 19.1666C16.7074 19.1666 17.3857 18.8857 17.8858 18.3856C18.3859 17.8855 18.6668 17.2072 18.6668 16.5Z" stroke={activeTab === "vision" ? "#8D0060" : "#121212"} strokeWidth="2.5"/>
</svg>
         Our Vision
        </div>
   
      <p
        onClick={() => setActiveTab("mission")}
        className={`flex gap-1  w-fit cursor-pointer pb-1    sm:text-[1.5rem] leading-[2.1875rem]
          ${activeTab === "mission" ? "border-b-3 border-[#8D0060] text-[#8D0060]" : ""}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M20.3333 25.5C20.6 25.5 20.8333 25.4 21.0333 25.2C21.2333 25 21.3333 24.7667 21.3333 24.5C21.3333 24.2333 21.2333 24 21.0333 23.8C20.8333 23.6 20.6 23.5 20.3333 23.5C20.0667 23.5 19.8333 23.6 19.6333 23.8C19.4333 24 19.3333 24.2333 19.3333 24.5C19.3333 24.7667 19.4333 25 19.6333 25.2C19.8333 25.4 20.0667 25.5 20.3333 25.5ZM24 25.5C24.2667 25.5 24.5 25.4 24.7 25.2C24.9 25 25 24.7667 25 24.5C25 24.2333 24.9 24 24.7 23.8C24.5 23.6 24.2667 23.5 24 23.5C23.7333 23.5 23.5 23.6 23.3 23.8C23.1 24 23 24.2333 23 24.5C23 24.7667 23.1 25 23.3 25.2C23.5 25.4 23.7333 25.5 24 25.5ZM27.6667 25.5C27.9333 25.5 28.1667 25.4 28.3667 25.2C28.5667 25 28.6667 24.7667 28.6667 24.5C28.6667 24.2333 28.5667 24 28.3667 23.8C28.1667 23.6 27.9333 23.5 27.6667 23.5C27.4 23.5 27.1667 23.6 26.9667 23.8C26.7667 24 26.6667 24.2333 26.6667 24.5C26.6667 24.7667 26.7667 25 26.9667 25.2C27.1667 25.4 27.4 25.5 27.6667 25.5ZM6.66667 28.5C5.93333 28.5 5.30578 28.2391 4.784 27.7173C4.26222 27.1956 4.00089 26.5676 4 25.8333V7.16667C4 6.43333 4.26133 5.80578 4.784 5.284C5.30667 4.76222 5.93422 4.50089 6.66667 4.5H25.3333C26.0667 4.5 26.6947 4.76133 27.2173 5.284C27.74 5.80667 28.0009 6.43422 28 7.16667V16.1C27.5778 15.9 27.1444 15.728 26.7 15.584C26.2556 15.44 25.8 15.3342 25.3333 15.2667V7.16667H6.66667V25.8333H14.7333C14.8 26.3222 14.9058 26.7889 15.0507 27.2333C15.1956 27.6778 15.3676 28.1 15.5667 28.5H6.66667ZM6.66667 24.5V25.8333V7.16667V15.2667V15.1667V24.5ZM9.33333 23.1667H14.7667C14.8333 22.7 14.9391 22.2444 15.084 21.8C15.2289 21.3556 15.3898 20.9222 15.5667 20.5H9.33333V23.1667ZM9.33333 17.8333H17.4667C18.1778 17.1667 18.9724 16.6111 19.8507 16.1667C20.7289 15.7222 21.6676 15.4222 22.6667 15.2667V15.1667H9.33333V17.8333ZM9.33333 12.5H22.6667V9.83333H9.33333V12.5ZM24 31.1667C22.1556 31.1667 20.5836 30.5164 19.284 29.216C17.9844 27.9156 17.3342 26.3436 17.3333 24.5C17.3324 22.6564 17.9827 21.0844 19.284 19.784C20.5853 18.4836 22.1573 17.8333 24 17.8333C25.8427 17.8333 27.4151 18.4836 28.7173 19.784C30.0196 21.0844 30.6693 22.6564 30.6667 24.5C30.664 26.3436 30.0138 27.916 28.716 29.2173C27.4182 30.5187 25.8462 31.1684 24 31.1667Z" fill={activeTab === "mission" ? "#8D0060" : "#121212"}/>
</svg>
        Our Mission
      </p>
    </div>
<div className=' mx-4 sm:mx-16'>
           {activeTab === "vision" ? 
<p className=' leading-[1.75rem] opacity-[0.8] sm:max-w-2xl mx-auto  text-center mt-6'>To be one of the regional leading firms in design & engineering, project management, supervision consultancy known for precision, innovation, and execution excellence.</p>
:<p className=' leading-[1.75rem] opacity-[0.8] sm:max-w-2xl mx-auto  text-center mt-6'>To deliver seamless project lifecycle services from ideation to delivery, integrating innovation and artificial intelligence.
</p>
}
</div>
<div className=' mt-16'>
<IntroductorySection style='sm:pt-34 pt-16' styleImage=' h-[52rem] sm:h-[45rem] xl:h-[40rem]' isAbout  description1="Terra is a multi-disciplinary group operating at the intersection of strategic oversight and on-the-ground delivery. We help shape, manage, and monitor complex projects with clarity and confidence — from idea to delivery."
description2='With operations in the UAE, Egypt and Saudi Arabia, we combine local knowledge with global standards to deliver measurable results in various sectors including real estate, master plan and hospitality incorporating artificial intelligence in all design’s.'
descriptionTitle="Leadership You Can Trust"
description3='Our leadership team brings over two decades of experience across the region’s most complex and iconic developments.
Led by certified project managers, quantity surveyors, and engineers, we combine big-picture strategy with execution-level precision.'
/>
</div>

<div className='  text-center mt-12'>
  <h1>Leaderships You Can Trust</h1>
  <p className=' text-[#767676] leading-[2.1875rem] sm:text-[1.2rem] sm:max-w-2xl mx-auto text-center mt-6'>Our leadership team brings over two decades of experience across the region’s most complex and iconic developments.
Led by certified project managers, quantity surveyors, and engineers, we combine big-picture strategy with execution-level precision.
</p>
<div className=' mt-6 bg-[rgba(18,18,18,0.30)] px-4 sm:px-16 py-4  WhiteText flex justify-between flex-wrap items-center'>
          <p className=' flex items-center gap-6 text-[1rem] leading-[2rem]'>Local Authority Compliance <ChevronRight className=' w-5 h-5'/></p>
          <p className=' flex items-center gap-6 text-[1rem] leading-[2rem]'>Regional Delivery Excellence <ChevronRight className=' w-5 h-5'/></p>
          <p className=' flex items-center gap-6 text-[1rem] leading-[2rem]'>PMP-Certified leadership <ChevronRight className=' w-5 h-5'/></p>
          <p className=' flex items-center gap-6 text-[1rem] leading-[2rem]'>Local Authority Compliance <ChevronRight className=' w-5 h-5'/></p>
</div>
</div>

    <div className='  WhiteText mt-20 py-28 px-4 sm:px-18'
         style={{
    backgroundImage: `url(${BgSection})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
backgroundPosition: "center"
  }}
    >
      <h1 className='WhiteText'>Industries We Serve</h1>
      <div className=' mt-12 flex flex-wrap items-center justify-between'>
        {Industries.map((industry) => (
          <ul className=' space-y-6'>
          <li className=' flex items-center  text-[1.125rem] leading-[2rem] gap-2'><Check className=' w-4 h-4'/>{industry.FirstIndustry}</li>
          <li className=' flex items-center  text-[1.125rem] leading-[2rem] gap-2'><Check className=' w-4 h-4'/>{industry.SecondIndustry}</li>
        </ul>
        ))}
      </div>
    </div>


    </div>

  )
}
