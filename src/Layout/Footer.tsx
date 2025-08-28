import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import footer from  "../assets/footer.png"
import Logo from "../assets/logo2.png"
export default function Footer() {
  return (
    <div className=" border-none overflow-hidden  ">
      <div className=" border-none  bg-[#DB9FCE] w-fit text-white rounded-l-2xl p-2 right-2 ms-auto">
        <Facebook/>
        <Instagram/>
        <Linkedin/>
        <Twitter/>
      </div>
      <div
        className=" border-none  sm:h-[314px]   px-16  w-full sm:pt-20 pt-32  bottom-0"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='   grid grid-cols-2  text-[#FFFFFF] '>

        <div  className=' flex flex-col  items-center justify-center sr-only sm:not-sr-only '>
            <div className=' max-w-[6rem]'>
        <img alt='logo' src={Logo} className=' w-full object-contain'/>
            </div>
        <h5 className=' -mt-6 mb-2'>TERRA</h5>
        <span className=' text-xs'>@2025 Terra PMC Project</span>
        <span className=' text-xs'>Management LLC</span>
        </div>
        
            <ul className='  text-sm space-y-4'>
                <li>Quick Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <ul className='  text-sm space-y-4'>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>

            </ul>
                <ul className='  text-sm space-y-4'>
                    <li>Contact</li>
                    <li>info@terragroup.ae</li>
                    <li>+971xxx xxx xxx</li>
                    <li>Sun-Thu 9:00-18:00</li>
                </ul>
        </div>
        <div  className=' flex flex-col  items-center justify-center not-sr-only sm:sr-only text-white '>
            <div className=' max-w-[6rem]'>
        <img alt='logo' src={Logo} className=' w-full object-contain'/>
            </div>
        <h5 className=' -mt-6 mb-2'>TERRA</h5>
            <div className=" flex sm:flex-col items-center justify-center gap-4 ">
        <span className=' text-[8px] sm:text-xs '>@2025 Terra PMC Project</span>
        <span className=' text-[8px] sm:text-xs '>Management LLC</span>
            </div>
        </div>
      </div>
          </div>
)
}
