  // src/pages/Services.tsx
  import {  ChevronLeft, ChevronRight } from 'lucide-react'
  import BgSection from "../assets/image 3.png"
  import RealEstate from "../assets/RealEstate.png"
  import pro2 from "../assets/img1.jpg"
  import pro3 from "../assets/img2.jpg"
  import pro1 from "../assets/image 3.png"
  import p1 from "../assets/img4.jpg"
  import p2 from "../assets/img5.jpg"
  import p3 from "../assets/img6.jpg"
  import p4 from "../assets/img7.jpg"
  import p5 from "../assets/img8.jpg"
  import p6 from "../assets/img9.jpg"
  import "keen-slider/keen-slider.min.css";
  import { useKeenSlider } from "keen-slider/react";
import Country from '../Components/Country'

  export default function Services() {
    const services = [
      {
        title:"Design Services",
        description:"From pre-concept to concept and detailed design, we ensure every stage of design is strategically aligned, practical, and buildable.",
        icon:p6
      },
      {
        title:"Project and constructuion Management (PMC)",
        description:"Comprehensive oversight to ensuring projects are delivered safetly on time, on budget, and achieving our client’s goals.",
        icon:p5
      },
      {
        title:"Construction Supervision Consultancy",
        description:"On-site presence and quality assurance throughout the build process, ensuring safety and compliance at every step.",
        icon:p1
      },
      {
        title:"Cost Consultancy",
        description:"Transparent cost forecasting, budgeting, and value engineering services to maximize project value.",
        icon:p3
      },
      {
        title:"Feasability Studies",
        description:"Help clients make informed decisions before committing to a project. Our team analyzes technical, financial, environmental, and regulatory factors to assess project viability and identify potential risks and opportunities.",
        icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" fill="none">
          <path d="M68.6536 52.2C77.2 52.2 84.1643 44.5875 84.1643 35.325C84.1643 26.1679 77.2357 18.9143 68.6536 18.9143C60.1429 18.9143 53.1411 26.275 53.1411 35.3965C53.1768 44.6232 60.1429 52.2 68.6536 52.2ZM27.2893 52.9893C34.6857 52.9893 40.7536 46.3465 40.7536 38.1965C40.7536 30.225 34.7571 23.7982 27.2893 23.7982C19.8929 23.7982 13.7893 30.334 13.825 38.2679C13.8607 46.384 19.8929 52.9893 27.2893 52.9893ZM68.6536 46.7786C63.4107 46.7786 58.9214 41.7518 58.9214 35.3965C58.9214 29.1465 63.3393 24.3375 68.6536 24.3375C74.0036 24.3375 78.3839 29.0768 78.3839 35.3232C78.3839 41.6804 73.9679 46.7786 68.6536 46.7786ZM27.2893 47.6393C22.9089 47.6393 19.175 43.4393 19.175 38.2679C19.175 33.2054 22.8714 29.1482 27.2893 29.1482C31.8125 29.1482 35.4393 33.134 35.4393 38.1965C35.4393 43.4393 31.7054 47.6393 27.2893 47.6393ZM7.325 85.9161H35.5125C33.7875 84.9465 32.4589 82.7911 32.7107 80.6018H6.42857C5.71071 80.6018 5.35179 80.3161 5.35179 79.6322C5.35179 70.7286 15.5125 62.3982 27.2554 62.3982C31.7786 62.3982 35.8357 63.475 39.3196 65.5215C40.4753 64.0583 41.8427 62.7758 43.3768 61.7161C38.7446 58.6625 33.1804 57.084 27.2554 57.084C12.2089 57.084 0 67.9982 0 79.9554C0 83.9411 2.44107 85.9161 7.325 85.9161ZM46.1036 85.9161H91.2036C97.1625 85.9161 100 84.1215 100 80.1715C100 70.7643 88.1143 57.1536 68.6536 57.1536C49.1554 57.1536 37.2714 70.7643 37.2714 80.1715C37.2714 84.1215 40.1071 85.9161 46.1036 85.9161ZM44.3804 80.4947C43.4464 80.4947 43.0518 80.2447 43.0518 79.4893C43.0518 73.6 52.1714 62.5786 68.6536 62.5786C85.1 62.5786 94.2179 73.6 94.2179 79.4893C94.2179 80.2429 93.8607 80.4947 92.925 80.4947H44.3804Z" fill="#121212"/>
        </svg>)
      },
    ];

    const Industries = [
      { FirstIndustry:"Mixed-Use Real Estate" },
      { FirstIndustry:"Hospitality" },
      { FirstIndustry:"Master planning" },
    ];

    const projects = [
      { title:"Laguna", img: pro3 },
      { title:"Do Dubai", img: pro1 },
      { title:"Do New Cairo", img: pro2 },
      { title:"Al Reem", img: RealEstate },
    ];

    // ===== Partners (ضع لوغوهات شفافة هنا لاحقًا) =====
    const partners = [
      { name: "Partner 1", img: p1 },
      { name: "Partner 2", img: p2 },
      { name: "Partner 3", img: p3 },
      { name: "Partner 4", img: p4 },
      { name: "Partner 5", img: p5 },
      { name: "Partner 6", img: p6 },
    ];

    // === Sliders (Mobile-first) ===
    const [servicesSliderRef, slider] = useKeenSlider({
      initial: 0,
      slides: { perView: 1.2, spacing: 8 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 12 }, // تابلت صغير
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 14 }, // تابلت أفقي
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 }, // لابتوب
      },
    },
    });

  const [projectsSliderRef, sliderProject] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: { perView: 1.2, spacing: 8 }, // موبايل افتراضياً (يعرض 1 وبقايا من الثاني)
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 12 }, // تابلت صغير
      },
      "(min-width: 768px)": {
        slides: { perView: 2.5, spacing: 14 }, // تابلت أفقي
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 16 }, // لابتوب
      },
    },
  })


    // ===== Partners: أوتوبلاي =====
    const autoplayPlugin = (s: any) => {
      let interval: any = null
      let mouseOver = false
      const clear = () => interval && clearInterval(interval)
      const start = () => {
        clear()
        interval = setInterval(() => { if (!mouseOver) s.next() }, 2000)
      }
      s.on("created", () => {
        s.container.addEventListener("mouseover", () => { mouseOver = true; clear() })
        s.container.addEventListener("mouseout", () => { mouseOver = false; start() })
        start()
      })
      s.on("dragStarted", clear)
      s.on("animationEnded", start)
      s.on("updated", start)
    }

    const [partnersSliderRef] = useKeenSlider<HTMLDivElement>(
      {
        loop: true,
        renderMode: "performance",
        drag: true,
        rubberband: false,
        slides: { perView: 3, spacing: 16 },
        breakpoints: {
          "(min-width: 640px)":  { slides: { perView: 4, spacing: 24 } },
          "(min-width: 1024px)": { slides: { perView: 6, spacing: 32 } },
        },
      },
      [autoplayPlugin]
    );

    return (
      <div className='mt-16 mb-24'>
  <div className=' relative'>

          <div className="absolute w-full -mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="1550" height="700" viewBox="0 0 1440 628" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1411.8 573.142C1411.8 573.142 1146.84 515.669 864.031 606.416C581.224 697.163 513.729 472.413 296.463 472.413C79.1978 472.413 -39.0573 573.142 -39.0573 573.142L-135 163.42C-135 163.42 -55.5126 98.3842 218.092 15.9558C491.696 -66.4727 737.967 197.298 974.756 197.298C1211.54 197.298 1462 2.04126 1462 2.04126L1411.8 573.142Z" fill="#DB9FCE" fillOpacity="0.2"/>
            </svg>
          </div>

        <div className=' relative mx-4 sm:mx-40'>
          <h1 style={{ fontFamily: "GothamHeadline, sans-serif" }}
          className='mb-12'>Our Core Services</h1>

          <div className='relative'>
            <div ref={servicesSliderRef} className="keen-slider overflow-hidden">
              {services.map((service, idx) => (
                <div className=' bg-[#FFFFFF] keen-slider__slide h-[20rem] border border-[#767662] rounded-2xl relative ' key={idx}>
                    <img alt={service.title} src={RealEstate} className=' w-full h-full bg-cover object-cover  absolute'/>
                    <div className=' p-2  space-y-2  bg-white/80  bottom-10 z-[99] absolute left-4 right-4 rounded-xl' >
                      <p className=' text-base flex font-medium ' style={{ fontFamily: "GothamHeadline, sans-serif" }}>{service.title}</p>
                      <p className=' text-xs text-[#767676]'>{service.description}</p>
                    </div>
                </div>
              ))}
            </div>

            <button
              className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
              onClick={() => slider.current?.prev()}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
              onClick={() => slider.current?.next()}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        </div>
                    <div className=" mt-32  sm:ps-40  overflow-hidden  space-y-6 rounded-l-2xl "
        
        >
          <div
            className="  relative   p  right-0 ms-auto border border-x-0 border-y-[#FFFFFF] text space-y-3   sm:py-24  sm:px-8 p-3 rounded-l-2xl "
                  style={{
      backgroundImage: `url(${BgSection})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  backgroundPosition: "center"
    }}
          >
                          <div className="absolute inset-0 bg-[#031556] opacity-[0.5] h-full rounded-l-2xl"></div>
    <div className=" relative z-10  flex flex-col sm:flex-row justify-between items-center gap-10">

            <div className="  space-y-2 WhiteText mx-auto">
  <h1 style={{ fontFamily: "GothamHeadline, sans-serif" }} className='WhiteText m-auto'>Industries We Serve</h1>
  <div className=' flex flex-wrap  space-x-20 mt-4'>
                        {Industries.map((industry,idx) => (
                          <p className=" text-xs sm:text-[1.5rem] leading-[2.1875rem]" key={idx}>
                            {industry.FirstIndustry}
                          </p>
                      ))}
                      </div>
            </div>
          
                </div>
          </div>
        </div>
        {/* ===== Projects ===== */}
    <div className="relative mt-14">
          <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="1550" height="700" viewBox="0 0 1440 628" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M1411.8 573.142C1411.8 573.142 1146.84 515.669 864.031 606.416C581.224 697.163 513.729 472.413 296.463 472.413C79.1978 472.413 -39.0573 573.142 -39.0573 573.142L-135 163.42C-135 163.42 -55.5126 98.3842 218.092 15.9558C491.696 -66.4727 737.967 197.298 974.756 197.298C1211.54 197.298 1462 2.04126 1462 2.04126L1411.8 573.142Z" fill="#DB9FCE" fillOpacity="0.2"/>
            </svg>
          </div>

          <div className="relative space-y-12 pt-14 mx-4 sm:mx-16">
            <h1 style={{ fontFamily: "GothamHeadline, sans-serif" }}>Projects</h1>

            <div className='relative'>
              <div ref={projectsSliderRef} className="keen-slider overflow-hidden">
                {projects.map((project, idx) => (
                  <div key={idx} className="keen-slider__slide w-full ">
                    <Country
                      src={project.img}
                      description={project.title}
                      styleImg=" w-full rounded-lg h-80!"
                      styleDesc="text-center font-bold text-[1rem] leading-[1.5rem] max-w-[17rem] mx-auto"
                    />
                  </div>
                ))}
              </div>

              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                onClick={() => sliderProject.current?.prev()}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                onClick={() => sliderProject.current?.next()}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>


        {/* ===== Partners ===== */}
        <div className="relative space-y-12  mx-4 sm:mx-16  sm:my-42 my-36">
          <h1 style={{ fontFamily: "GothamHeadline, sans-serif" }}
          >Partners</h1>

          <div className="relative">
            <div ref={partnersSliderRef} className="keen-slider overflow-hidden">
              {partners.map((p, i) => (
                <div key={i} className="keen-slider__slide">
                  <div className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
    )
  }