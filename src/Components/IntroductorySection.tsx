import { ChevronRight } from "lucide-react";
import Meeting from "../assets/meeting2.jpg";
type IntroductorySectionProps ={
  style?:string,
  isActive?:boolean,
  styleImage?:string,
  description?:string,
  description1?:string,
  description2?:string,
  description3?:string,
  descriptionTitle?:string,
  isAbout?:boolean
}
export default function IntroductorySection({isActive, style, styleImage, description,description1, description2, description3,descriptionTitle,isAbout}:IntroductorySectionProps) {
  return (
    <div className="relative w-full WhiteText   ">
      <div className="relative w-full     ">
        <img
          src={Meeting}
          alt="meeting"
          className={` w-full   object-cover ${styleImage} `}
        />
        <div className="absolute inset-0 bg-[#031556] opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-between ">
          <div className={`space-y-4 lg:w-2/3   sm:px-16 px-4 z-10 flex  flex-col   ${style} `} >
            <h1 className=" WhiteText flex" style={{ fontFamily: "GothamHeadline, sans-serif" }}>
              Who We Are?
            </h1>
            {isAbout?
            <div className=" space-y-2">

            <p className="sm:text-[1.125rem] leading-[2rem] text-sm  text-[#FFFBFB]">
              {description1}
            </p>
            <p className="sm:text-[1.125rem] leading-[2rem] text-sm  text-[#FFFBFB]">
              {description2}
            </p>
            <p className="sm:text-[1.125rem] leading-[2rem] text-sm  text-[#FFFBFB] mt-2">
              {descriptionTitle}
            </p>
            <p className="sm:text-[1.125rem] leading-[2rem] text-sm  text-[#FFFBFB] ">
              {description3}
            </p>
            </div>
            :<p className="sm:text-[1.125rem] leading-[2rem] text-sm  text-[#FFFBFB]">
              {description}
            </p>
            
            }
          </div>
{isActive &&
      <div className="flex flex-wrap items-center justify-between WhiteText py-3 sm:px-16 px-4    bg-[rgba(18,18,18,0.30)]">
        {[
          "Local Authority Compliance",
          "Regional Delivery Excellence",
          "PMP-Certified leadership",
          "Local Authority Compliance",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <p className="text-[1.125rem] font-[Helvetica] leading-[2rem]">
              {text}
            </p>
            <ChevronRight className="w-[1rem] h-[1rem]" />
          </div>
        ))}
      </div>
      }
              </div>
      </div>
    </div>
  );
}
