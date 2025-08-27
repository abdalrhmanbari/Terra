import Logo from "../assets/logo.png"
import Button from '../components/Button'
export default function Navbar() {
  return (
    <div className=' flex items-center justify-between '>
        <div>

        <img alt='logo' src={Logo} className=' w-[8rem]  object-contain '/>
        </div>
        <div>
            <ul className=' flex items-center gap-10 text-sm'>
                <li className=' text-white bg-[#8D0060]  p-2 rounded-2xl'>Home</li>
                <li className=' text-white'>Services/About US</li>
                <li className=' text-white'>Contact Us</li>
            </ul>
        </div>
        <Button btn='Request a Proposal' style='bg-[#8D0060] '/>

    </div>
  )
}
