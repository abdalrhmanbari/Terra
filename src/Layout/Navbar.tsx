import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { Globe, Menu, X } from "lucide-react"; // أيقونات الهامبرغر و الإغلاق

type NavbarProps = {
  color?: string;
};

export default function Navbar({ color }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 sm:px-16 py-4">
            <button
        className="sm:hidden text-white text-3xl bg-[#8D0060] p-1 rounded-full  ease-linear "
        onClick={() => setOpen(true)}
     
      >
        <Menu />
      </button>
      <div className="  max-sm:translate-x-1/3 ">

        <NavLink to="/">
          <img alt="logo" src={Logo} className="w-32 object-contain " />
        </NavLink>
      </div>
            <button className="sm:hidden text-white text-3xl bg-[#8D0060] p-1 rounded-full fle">
        <Globe />
      </button>
      

      {/* Links (Desktop) */}
      <ul className="hidden sm:flex items-center space-x-8 text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#8D0060] text-white px-3 py-2 rounded-2xl"
                : `${color || "text-white"} px-3 py-2 rounded-2xl`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-[#8D0060] text-white px-3 py-2 rounded-2xl"
                : `${color || "text-white"} px-3 py-2 rounded-2xl`
            }
          >
            Services/About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-[#8D0060] text-white px-3 py-2 rounded-2xl"
                : `${color || "text-white"} px-3 py-2 rounded-2xl`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Button (Desktop) */}
      <div className="hidden sm:block">
        <Button btn="Request a Proposal" style="bg-[#8D0060]" />
      </div>

      {/* Mobile Menu (Drawer) */}
      {open && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex transform transition-transform duration-300 ease-in-out ">
          <div className="bg-[#FFFFFF] w-64 h-full p-6 space-y-6">
            {/* Close Button */}
            <button
              className="text-[#8D0060] text-2xl mb-6"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>

            {/* Links */}
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-[#031556] text-lg"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="text-[#031556] text-lg"
                >
                  Services/About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-[#031556] text-lg"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Button */}
            <div className="pt-6">
              <Button btn="Request a Proposal" style="bg-[#8D0060] w-full" />
            </div>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setOpen(false)}></div>
        </div>
      )}
    </div>
  );
}
