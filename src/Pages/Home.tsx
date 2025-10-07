
import Infrastructure from "../assets/Infrastructure.png"
import Industrial from "../assets/Industrial.png"
import RealEstate from "../assets/RealEstate.png"
import Government from "../assets/Government.png"
import Saudi from "../assets/saudi-arabia-flag (2) 1 (1).png"
import Egypt from "../assets/Egypt.jpg"
import Emirates from "../assets/UnitedArabEmirates.jpg"
import BgSection from "../assets/image 3.png"
import HomePage from "../assets/homePage.jpg"
import Button from "../Components/Button"
import Cart from "../Components/Cart"
import IntroductorySection from "../Components/IntroductorySection"
import CartServices from "../Components/CartServices"
import Country from "../Components/Country"
export default function Home() {

const services = [
    {
    title:"Design Services",
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M87.1833 48.9583H75.9583C70.025 48.9583 65.6208 53.3708 65.6208 58.3333C65.6208 63.2958 70.025 67.7083 75.9542 67.7083H87.2792C88.1375 67.6542 88.5083 67.075 88.5375 66.725V49.9417C88.5083 49.5917 88.1375 49.0125 87.2792 48.9625L87.1833 48.9583ZM86.875 42.7083C87.1528 42.7056 87.4167 42.7111 87.6667 42.725C91.2917 42.9458 94.5042 45.6833 94.775 49.5083C94.7917 49.7583 94.7917 50.0292 94.7917 50.2792V66.3875C94.7917 66.6375 94.7917 66.9083 94.775 67.1583C94.5042 70.9833 91.2917 73.7208 87.6625 73.9458C87.4153 73.957 87.1514 73.9611 86.8708 73.9583H75.9625C67.025 73.9583 59.375 67.175 59.375 58.3333C59.375 49.4917 67.025 42.7083 75.9583 42.7083H86.875Z" fill="#121212"/>
  <path d="M79.1666 58.3333C79.1666 59.4384 78.7277 60.4982 77.9463 61.2796C77.1649 62.061 76.1051 62.5 75 62.5C73.8949 62.5 72.8351 62.061 72.0537 61.2796C71.2723 60.4982 70.8333 59.4384 70.8333 58.3333C70.8333 57.2282 71.2723 56.1684 72.0537 55.387C72.8351 54.6056 73.8949 54.1666 75 54.1666C76.1051 54.1666 77.1649 54.6056 77.9463 55.387C78.7277 56.1684 79.1666 57.2282 79.1666 58.3333Z" fill="#121212"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M86.875 42.7084C87.1528 42.7056 87.4167 42.7111 87.6667 42.725C88.6042 42.7792 89.5125 43.0042 90.3542 43.375C89.9083 36.6834 88.6792 31.525 84.8292 27.6709C81.7083 24.5542 77.7542 23.1709 72.8708 22.5125L72.6959 22.4917L72.5625 22.3959L56.9958 12.075C54.2951 10.3144 51.1407 9.37695 47.9167 9.37695C44.6927 9.37695 41.5383 10.3144 38.8375 12.075L23.275 22.3959L23.1375 22.4917L22.9625 22.5125C18.0792 23.1709 14.125 24.5542 11.0042 27.6709C7.88751 30.7917 6.50418 34.7459 5.84584 39.6292C5.20834 44.3792 5.20834 50.4417 5.20834 58.1V58.5667C5.20834 66.225 5.20834 72.2917 5.84584 77.0375C6.50418 81.9209 7.88751 85.875 11.0042 88.9959C14.125 92.1125 18.0792 93.4959 22.9625 94.1542C27.7125 94.7917 33.775 94.7917 41.4333 94.7917H54.4C62.0583 94.7917 68.125 94.7917 72.8708 94.1542C77.7542 93.4959 81.7083 92.1125 84.8292 88.9959C88.6792 85.1417 89.9083 79.9834 90.3542 73.2875C89.507 73.6653 88.6097 73.8848 87.6625 73.9459C87.4153 73.957 87.1514 73.9611 86.8709 73.9584H84.0333C83.5583 79.55 82.4875 82.5 80.4083 84.575C78.6459 86.3375 76.2292 87.3959 72.0375 87.9584C67.7583 88.5334 62.1125 88.5417 54.1667 88.5417H41.6667C33.7208 88.5417 28.0792 88.5334 23.7917 87.9584C19.6042 87.3959 17.1875 86.3375 15.425 84.575C13.6625 82.8125 12.6042 80.3959 12.0417 76.2042C11.4667 71.925 11.4583 66.2792 11.4583 58.3334C11.4583 50.3875 11.4667 44.7459 12.0417 40.4584C12.6042 36.2709 13.6625 33.8542 15.425 32.0917C17.1875 30.3292 19.6042 29.2709 23.7958 28.7084C28.0792 28.1334 33.7208 28.125 41.6667 28.125H54.1667C62.1125 28.125 67.7584 28.1334 72.0417 28.7084C76.2292 29.2709 78.6459 30.3292 80.4083 32.0917C82.4875 34.1667 83.5583 37.1209 84.0333 42.7084H86.875ZM41.4333 21.875H54.4C56.5528 21.875 58.5806 21.8792 60.4833 21.8875L53.5417 17.2834C50.2083 15.075 45.625 15.075 42.2917 17.2834L35.3458 21.8875C37.2514 21.8764 39.2792 21.8722 41.4292 21.875" fill="#121212"/>
  <path d="M25 38.5416C24.1712 38.5416 23.3763 38.8709 22.7903 39.4569C22.2042 40.043 21.875 40.8378 21.875 41.6666C21.875 42.4954 22.2042 43.2903 22.7903 43.8763C23.3763 44.4624 24.1712 44.7916 25 44.7916H41.6667C42.4955 44.7916 43.2903 44.4624 43.8764 43.8763C44.4624 43.2903 44.7917 42.4954 44.7917 41.6666C44.7917 40.8378 44.4624 40.043 43.8764 39.4569C43.2903 38.8709 42.4955 38.5416 41.6667 38.5416H25Z" fill="#121212"/>
  <path d="M79.1666 58.3333C79.1666 59.4384 78.7277 60.4982 77.9463 61.2796C77.1649 62.061 76.1051 62.5 75 62.5C73.8949 62.5 72.8351 62.061 72.0537 61.2796C71.2723 60.4982 70.8333 59.4384 70.8333 58.3333C70.8333 57.2282 71.2723 56.1684 72.0537 55.387C72.8351 54.6056 73.8949 54.1666 75 54.1666C76.1051 54.1666 77.1649 54.6056 77.9463 55.387C78.7277 56.1684 79.1666 57.2282 79.1666 58.3333Z" fill="#121212"/>
</svg>)
},
  {
    title:"Project and Construction Management (PMC)",
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" fill="none">
  <path d="M58.3333 20.8333C56.1232 20.8333 54.0036 21.7113 52.4408 23.2741C50.878 24.8369 50 26.9565 50 29.1667V70.8333C50 73.0435 49.122 75.1631 47.5592 76.7259C45.9964 78.2887 43.8768 79.1667 41.6667 79.1667M12.5 70.8333H29.1667V87.5H12.5V70.8333ZM70.8333 12.5H87.5V29.1667H70.8333V12.5Z" stroke="#121212" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>)
},
  {
    title:"Construction Supervision Consultancy",
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 75 94" fill="none">
  <path d="M37.4792 3.74742L38.8868 0.455078C38.4419 0.264754 37.963 0.166626 37.4792 0.166626C36.9953 0.166626 36.5164 0.264754 36.0716 0.455078L37.4792 3.74742ZM37.4792 89.6345L35.7042 92.7408C36.2448 93.0496 36.8566 93.212 37.4792 93.212C38.1018 93.212 38.7136 93.0496 39.2542 92.7408L37.4792 89.6345ZM36.0668 0.45985L5.56734 13.529L8.37298 20.1137L38.882 7.03976L36.0668 0.45985ZM0.5 21.2064V53.9389H7.65726V21.2064H0.5ZM16.7279 81.8999L35.7042 92.7408L39.2542 86.5283L20.2779 75.6826L16.7279 81.8999ZM39.2542 92.7408L58.2305 81.8999L54.6804 75.6826L35.7042 86.5283L39.2542 92.7408ZM74.4583 53.9341V21.2111H67.3011V53.9437L74.4583 53.9341ZM69.4005 13.5338L38.8868 0.45985L36.0716 7.03498L66.5806 20.1137L69.4005 13.5338ZM74.4583 21.2111C74.4583 17.8711 72.4686 14.8507 69.4005 13.5338L66.5806 20.1137C66.7949 20.2061 66.9773 20.3593 67.1054 20.5544C67.2335 20.7494 67.3015 20.9778 67.3011 21.2111H74.4583ZM58.2305 81.8999C63.1598 79.0831 67.2569 75.0133 70.1068 70.103C72.9566 65.1927 74.4578 59.6163 74.4583 53.9389H67.3011C67.3001 58.3539 66.1324 62.6903 63.9161 66.5087C61.6997 70.3271 58.5136 73.492 54.6804 75.6826L58.2305 81.8999ZM0.5 53.9389C0.500509 59.6163 2.00174 65.1927 4.85157 70.103C7.7014 75.0133 11.7986 79.0831 16.7279 81.8999L20.2779 75.6826C16.444 73.4915 13.2574 70.326 11.0411 66.5066C8.82473 62.6873 7.65736 58.3499 7.65726 53.9341L0.5 53.9389ZM5.5578 13.529C4.05671 14.173 2.77748 15.2432 1.87848 16.6069C0.979488 17.9707 0.500214 19.5729 0.5 21.2064H7.65726C7.65726 20.7292 7.94355 20.295 8.38253 20.1041L5.5578 13.529Z" fill="#121212"/>
  <path d="M51.7937 37.1482L32.7077 56.2342L23.1647 46.6912" stroke="#121212" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>)
},

  {
    title:"Cost Consultancy",
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" fill="none">
  <path d="M68.6536 52.2C77.2 52.2 84.1643 44.5875 84.1643 35.325C84.1643 26.1679 77.2357 18.9143 68.6536 18.9143C60.1429 18.9143 53.1411 26.275 53.1411 35.3965C53.1768 44.6232 60.1429 52.2 68.6536 52.2ZM27.2893 52.9893C34.6857 52.9893 40.7536 46.3465 40.7536 38.1965C40.7536 30.225 34.7571 23.7982 27.2893 23.7982C19.8929 23.7982 13.7893 30.334 13.825 38.2679C13.8607 46.384 19.8929 52.9893 27.2893 52.9893ZM68.6536 46.7786C63.4107 46.7786 58.9214 41.7518 58.9214 35.3965C58.9214 29.1465 63.3393 24.3375 68.6536 24.3375C74.0036 24.3375 78.3839 29.0768 78.3839 35.3232C78.3839 41.6804 73.9679 46.7786 68.6536 46.7786ZM27.2893 47.6393C22.9089 47.6393 19.175 43.4393 19.175 38.2679C19.175 33.2054 22.8714 29.1482 27.2893 29.1482C31.8125 29.1482 35.4393 33.134 35.4393 38.1965C35.4393 43.4393 31.7054 47.6393 27.2893 47.6393ZM7.325 85.9161H35.5125C33.7875 84.9465 32.4589 82.7911 32.7107 80.6018H6.42857C5.71071 80.6018 5.35179 80.3161 5.35179 79.6322C5.35179 70.7286 15.5125 62.3982 27.2554 62.3982C31.7786 62.3982 35.8357 63.475 39.3196 65.5215C40.4753 64.0583 41.8427 62.7758 43.3768 61.7161C38.7446 58.6625 33.1804 57.084 27.2554 57.084C12.2089 57.084 0 67.9982 0 79.9554C0 83.9411 2.44107 85.9161 7.325 85.9161ZM46.1036 85.9161H91.2036C97.1625 85.9161 100 84.1215 100 80.1715C100 70.7643 88.1143 57.1536 68.6536 57.1536C49.1554 57.1536 37.2714 70.7643 37.2714 80.1715C37.2714 84.1215 40.1071 85.9161 46.1036 85.9161ZM44.3804 80.4947C43.4464 80.4947 43.0518 80.2447 43.0518 79.4893C43.0518 73.6 52.1714 62.5786 68.6536 62.5786C85.1 62.5786 94.2179 73.6 94.2179 79.4893C94.2179 80.2429 93.8607 80.4947 92.925 80.4947H44.3804Z" fill="#121212"/>
</svg>)
},
  {
    title:"Feasibilty Studies",
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" fill="none">
  <path d="M68.6536 52.2C77.2 52.2 84.1643 44.5875 84.1643 35.325C84.1643 26.1679 77.2357 18.9143 68.6536 18.9143C60.1429 18.9143 53.1411 26.275 53.1411 35.3965C53.1768 44.6232 60.1429 52.2 68.6536 52.2ZM27.2893 52.9893C34.6857 52.9893 40.7536 46.3465 40.7536 38.1965C40.7536 30.225 34.7571 23.7982 27.2893 23.7982C19.8929 23.7982 13.7893 30.334 13.825 38.2679C13.8607 46.384 19.8929 52.9893 27.2893 52.9893ZM68.6536 46.7786C63.4107 46.7786 58.9214 41.7518 58.9214 35.3965C58.9214 29.1465 63.3393 24.3375 68.6536 24.3375C74.0036 24.3375 78.3839 29.0768 78.3839 35.3232C78.3839 41.6804 73.9679 46.7786 68.6536 46.7786ZM27.2893 47.6393C22.9089 47.6393 19.175 43.4393 19.175 38.2679C19.175 33.2054 22.8714 29.1482 27.2893 29.1482C31.8125 29.1482 35.4393 33.134 35.4393 38.1965C35.4393 43.4393 31.7054 47.6393 27.2893 47.6393ZM7.325 85.9161H35.5125C33.7875 84.9465 32.4589 82.7911 32.7107 80.6018H6.42857C5.71071 80.6018 5.35179 80.3161 5.35179 79.6322C5.35179 70.7286 15.5125 62.3982 27.2554 62.3982C31.7786 62.3982 35.8357 63.475 39.3196 65.5215C40.4753 64.0583 41.8427 62.7758 43.3768 61.7161C38.7446 58.6625 33.1804 57.084 27.2554 57.084C12.2089 57.084 0 67.9982 0 79.9554C0 83.9411 2.44107 85.9161 7.325 85.9161ZM46.1036 85.9161H91.2036C97.1625 85.9161 100 84.1215 100 80.1715C100 70.7643 88.1143 57.1536 68.6536 57.1536C49.1554 57.1536 37.2714 70.7643 37.2714 80.1715C37.2714 84.1215 40.1071 85.9161 46.1036 85.9161ZM44.3804 80.4947C43.4464 80.4947 43.0518 80.2447 43.0518 79.4893C43.0518 73.6 52.1714 62.5786 68.6536 62.5786C85.1 62.5786 94.2179 73.6 94.2179 79.4893C94.2179 80.2429 93.8607 80.4947 92.925 80.4947H44.3804Z" fill="#121212"/>
</svg>)
},
]
  return (
    <div className=" mx-auto overflow-x-hidden   ">
      <div className=" relative flex flex-col px-4 sm:px-16 py-20   space-y-4    WhiteText "
               style={{
    backgroundImage: `url(${HomePage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
backgroundPosition: "center"
  }}
      >
              <div className="absolute inset-0 bg-[#031556] opacity-[0.5] h-full"></div>
        <div className=" relative z-10 flex flex-col gap-10 sm:py-10">

          <h1 className=" text-white2 sm:text-[5rem]! me-auto text-left!   text-xl   sm:leading-[5rem]!  sm:w-lg " style={{ fontFamily: "GothamHeadline, sans-serif" }}>
     Your Vision, Our Precision.
          </h1>
          <p className="  font-light  text-sm sm:text-[1.5rem]  sm:w-md ">
From Ideation to delivery — To deliver seamless project lifecycle services.
          </p>
          <div className=" flex gap-8    ">
            <Button
              btn="Explore Our Services"
              style=" primaryBg  hover:bg-transparent text-sm  sm:text-base transition-all duration-300  border border-[#031556] sm:py-[1.25rem] sm:px-[1.875rem] p-4   "
            />
            <Button
              btn="Get in Touch"
              style=" border border-[#031556] text-sm sm:text-base sm:py-[1.25rem] sm:px-[1.875rem] p-4 "
            />
        </div>
      </div>
              </div>
      <div className="  flex sm:justify-between justify-center flex-wrap items-center    px-4    py-[3rem] gap-8 bg-[#FFF]">
        <Cart title="AI integrated design" description="Quality framework" />
        <div className="w-[0.01rem] h-12 bg-[#767676]   hidden sm:block"></div>
        <Cart title="From idea to delivery" description="Lifecycle oversight" />
        <div className="w-[0.01rem] h-12 bg-[#767676]   hidden sm:block"></div>
        <Cart title="+25 years of professional regional experience" description="Years regional experince" />
        <div className="w-[0.01rem] h-12 bg-[#767676]   hidden sm:block"></div>
        <Cart title="PMP certified professioanls" description="Certified leadership" />
      </div>

      <IntroductorySection isActive style="lg:pt-36 pt-12" styleImage="sm:h-[36rem] h-[46rem]" description="Terra is a regional design & engineering, consultancy and project management firm transforming how complex projects are designed, managed, and delivered. From design services (pre-concept, concept, and detailed design), through project and program management, construction supervision, and feasibility & cost consultancy, we provide end-to-end solutions with precision and integrity.
We partner with developers and private clients across the UAE, Egypt and Saudi Arabia, ensuring every project is delivered with clarity, control, and measurable results.
"/>
      <div className=" px-4 sm:px-16  py-[5rem] space-y-6 bg-[rgba(219,159,206,0.2)] ">
        <h1>
          Our Core Services
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-6">
          {services.map((service, idx) => (
    <CartServices
    style="h-[14rem]"
      key={idx}
      title={service.title}
      // description={service.description}
      icon={service.icon}
    />
  ))}
        </div>
      </div>
      <div className=" relative  mt-14">
        <div className=" absolute w-full">
    <svg xmlns="http://www.w3.org/2000/svg" width="1550" height="628" viewBox="0 0 1440 628" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M1411.8 573.142C1411.8 573.142 1146.84 515.669 864.031 606.416C581.224 697.163 513.729 472.413 296.463 472.413C79.1978 472.413 -39.0573 573.142 -39.0573 573.142L-135 163.42C-135 163.42 -55.5126 98.3842 218.092 15.9558C491.696 -66.4727 737.967 197.298 974.756 197.298C1211.54 197.298 1462 2.04126 1462 2.04126L1411.8 573.142Z" fill="#DB9FCE" fillOpacity="0.2"/>
</svg>
        </div>
<div className=" relative  px-4 sm:px-16 space-y-12 pt-14 ">
  <h1 style={{ fontFamily: "GothamHeadline, sans-serif" }}>Where We Operate</h1>
  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 ">
    <Country src={Emirates} description="UAE" styleDesc=" black sm:text-[1.5rem] font-bold" styleImg="   rounded-[1.25rem] w-[25rem] h-[25rem]"/>
    <Country src={Egypt} description="Egypt" styleDesc=" black sm:text-[1.5rem] font-bold" styleImg=" w-[25rem]  rounded-[1.25rem]  h-[25rem]"/>
    <Country src={Saudi} description="Saudi Arabia" styleDesc=" black sm:text-[1.5rem] font-bold" styleImg="  rounded-[1.25rem]  w-[25rem] h-[25rem]"/>
  </div>
</div>
      </div>
      <div className="sm:px-16 px-4 mt-24 space-y-6  bg-[rgba(3,21,86,0.10)] py-[3.5rem]">
        <h1>
          Trusted by Leading Developers
        </h1>
        <p className=" text-[#767676] text-[1.125rem] leading-[2rem] text-center sm:max-w-lg mx-auto">
          we’ve supported high-impact projects for some of the region’s most respected developers and consultancies.
        </p>
  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12  ">
    <Country src={RealEstate} description="RealEstate" styleDesc=" text-[1.125rem] leading-[2rem]" styleImg=" w-[25rem] rounded-[0.5rem]  h-[25rem]" isActive/>
    <Country src={Infrastructure} description="Infrastructure" styleDesc=" text-[1.125rem] leading-[2rem]" styleImg=" w-[25rem]  rounded-[0.5rem]  h-[25rem]" isActive/>
    <Country src={Industrial} description="Industrial" styleDesc=" text-[1.125rem] leading-[2rem]"  styleImg=" w-[25rem]   rounded-[0.5rem] h-[25rem]" isActive/>
    <Country src={Government} description="Government" styleDesc=" text-[1.125rem] leading-[2rem]" styleImg=" w-[25rem]    rounded-[0.5rem] h-[25rem]" isActive/>
  </div>
      </div>

      <div className=" my-12  sm:ps-40  overflow-hidden mt-8 space-y-6 rounded-l-2xl "
      
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

          <div className="  space-y-2 WhiteText">
            <h1 className=" flex WhiteText">Have a project in mind?</h1>
            <p className=" text-xs sm:text-[1.5rem] leading-[2.1875rem]">
              Let’s bring it to life — with clarity, control, and confidence.
            </p>
          </div>
          <div className="  p-2 rounded-full gap-2 flex bg-[#FFF]">
            <Button btn="Request a Proposal" style=" primaryBg text-sm sm:py-[1.25rem] sm:px-[1.875rem] p-4  " />
            <Button
              btn="Contact US"
              style=" border-2 border-[#031556] text-sm sm:py-[1.25rem] sm:px-[1.875rem]  p-4 "
              color="text-[#031556]"
              />
          </div>
              </div>
        </div>
      </div>
    </div>
  );
}
