import React from "react";
import Map from "../assets/Component 7.png";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import background from "../assets/contact.jpg";
import Button from "../Components/Button";
export default function Contact() {
  return (
    <div className="relative sm:px-16 px-4 WhiteText  w-full h-full sm:mb-[20rem] mb-[50rem] pt-12">
      <div
        className="[clip-path:polygon(0%_0%,100%_0%,100%_75%,50%_100%,0%_75%)] absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#031556] opacity-[0.5] z-10 [clip-path:polygon(0%_0%,100%_0%,100%_75%,50%_100%,0%_75%)]"></div>
      <div className=" relative z-[20] h-full">
        <div className="text-center   space-y-2">
          <h1 className="  WhiteText">Contact Us</h1>
          <div className=" m-auto text-sm leading-[2rem]">
            <p>Let’s Build Something Great Together</p>
            <p>From strategy to site, Terra is your trusted partner in delivering high-impact projects.</p>
            <p>Get in touch to schedule a consultation or request a proposal.</p>
          </div>
        </div>
        <div className=" bg-[rgba(0,0,0,0.00)]   backdrop-blur-sm  flex sm:flex-row flex-col-reverse justify-center max-w-5xl gap-20 m-auto  p-1 rounded-2xl   shadow-[0_2px_20px_0_rgba(0,0,0,0.10)] ">
          <div className=" rounded-md  sm:max-w-sm me-auto">
            <ul className=" bg-[#031556] text-[11px] space-y-2 rounded-t-2xl px-3 py-3">
              <p className=" text-[1.2rem] leading-[2.1875rem]">
                Direct Contact
              </p>
              <li className=" flex items-center gap-1 leading-[1.5rem]">
                <Mail className=" w-4 h-4" />
                Email: info@terragroup.ae
              </li>
              <li className=" flex items-center gap-1 leading-[1.5rem]">
                <Phone className=" w-4 h-4" />
                Landline Number: 04-331-388
              </li>
              <li className=" flex items-start gap-1 leading-[1.5rem]">
                <MapPin className=" w-4 h-4" />
              Office Address: Suite: 205, Building: API BUSINESS SUITE,Al Barsha First, Dubai, UAE
              </li>
              <li className=" flex items-center gap-1 leading-[1.5rem]">
              <Clock  className="w-4 h-4"/>: Monday – Thursday, 9:00 AM – 5:00 PM, Friday 9:00AM to 3:30PM
              </li>
            </ul>
            <img
              alt="Map"
              src={Map}
              className=" border border-[#031556] rounded-b-2xl w-[30rem] h-[20rem]"
            />
          </div>
          <div className="  sm:w-1/2  space-y-8 flex flex-col justify-center mx-auto ">
            <div className="  grid grid-cols-1 sm:grid-cols-2 gap-10 ">
              <div>
                <label className=" text-[#C2C2C2] leading-[1.75rem]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full text-gray-800 border-0 border-b-2 border-[#C2C2C2] focus:border-blue-500 focus:ring-0 outline-none WhiteText"
                />
              </div>
              <div>
                <label className=" text-[#C2C2C2] leading-[1.75rem]">
                  Company 
                </label>

                <input
                  type="text"
                  className="w-full text-gray-800 border-0 border-b-2 border-[#C2C2C2] focus:border-blue-500 focus:ring-0 outline-none WhiteText"
                />
              </div>

              <div>
                <label className=" text-[#C2C2C2] leading-[1.75rem]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full text-gray-800 border-0 border-b-2 border-[#C2C2C2] focus:border-blue-500 focus:ring-0 outline-none WhiteText"
                />
              </div>
              <div>
                <label className=" text-[#C2C2C2] leading-[1.75rem]">
                  Message
                </label>
                <input
                  type="text"
                  className="w-full text-gray-800 border-0 border-b-2 border-[#C2C2C2] focus:border-blue-500 focus:ring-0 outline-none WhiteText"
                />
              </div>
            </div>
            <div className="  ms-auto">
              <Button
                btn="Send Message"
                style="primaryBg  py-[1rem] px-[3rem]  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
