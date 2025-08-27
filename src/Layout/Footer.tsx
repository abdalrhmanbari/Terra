import footer from  "../assets/footer.png"
import logo from "../assets/logo2.png"
export default function Footer() {
  return (
      <div
        className="  h-[314px]  relative px-16  w-full pt-20  bottom-0"
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=' flex  justify-between'>

        <div  className=' flex flex-col text-[#FFFFFF] items-center justify-center '>
            <div className=' max-w-[6rem]'>
        <img alt='logo' src={logo} className=' w-full object-contain'/>
            </div>
        <h5 className=' -mt-6 mb-2'>TERRA</h5>
        <span className=' text-xs'>@2025 Terra PMC Project</span>
        <span className=' text-xs'>Management LLC</span>
        </div>
        
            <ul className=' text-[#FFFFFF] text-sm space-y-4'>
                <li>Quick Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <ul className=' text-[#FFFFFF] text-sm space-y-4'>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>

            </ul>
                <ul className=' text-[#FFFFFF] text-sm space-y-4'>
                    <li>Contact</li>
                    <li>info@terragroup.ae</li>
                    <li>+971xxx xxx xxx</li>
                    <li>Sun-Thu 9:00-18:00</li>
                </ul>
        </div>
      </div>
)
}
