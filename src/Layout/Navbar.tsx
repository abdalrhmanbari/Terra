import { NavLink } from "react-router-dom"
import Logo from "../assets/logo.png"
import Button from '../components/Button'
type NavbarProps ={
  color?: string
}
export default function Navbar({color} : NavbarProps) {
  return (
    <div className=' flex items-center justify-between overflow-x-hidden  '>
        <div>
                <NavLink to="/">
        <img alt='logo' src={Logo} className=' w-[8rem]  object-contain '/>
            </NavLink>
        </div>
        <div>
            <ul className=' flex items-center gap-10 text-sm sr-only sm:not-sr-only'>
              <li>
                <NavLink
              to="/"
              className={({ isActive }) => isActive
              ? "bg-[#8D0060] text-white   p-2 rounded-2xl cursor-pointer" : `  ${color || "text-white"}  p-2 rounded-2xl cursor-pointer`
              }>
                  Home
              </NavLink>
                  </li>
                <li>
                    <NavLink
              to="/about"
              className={({ isActive }) => isActive
              ? "bg-[#8D0060] text-white   p-2 rounded-2xl cursor-pointer" : `  ${color || "text-white"}  p-2 rounded-2xl cursor-pointer`
              }>

                  Services/About US
              </NavLink>
                  
                  </li>
                <li>
                    <NavLink
              to="/contact"
              className={({ isActive }) => isActive
              ? "bg-[#8D0060] text-white   p-2 rounded-2xl cursor-pointer" : `  ${color || "text-white"}  p-2 rounded-2xl cursor-pointer`
                            }>

                  Contact Us
              </NavLink>
                  </li>
            </ul>
        </div>
        <Button btn='Request a Proposal' style='bg-[#8D0060] '/>

    </div>
  )
}
