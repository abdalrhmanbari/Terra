import Navbar from "../Layout/Navbar";
import Banner from "../assets/Banner.png";
import computer from "../assets/computer.png";
import Button from "../components/Button";
import Cart from "../components/Cart";
import Identification from "../components/Identification";
import Card from "../components/Card";
import icon from "../assets/BG.png";
import map from "../assets/map.png";
import groupLeft from "../assets/groupLeft.png";
import Footer from "../Layout/Footer";
export default function Home() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col relative px-16 py-8"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div className=" flex  justify-between mt-8">
          <div className=" w-1/2  space-y-4 flex flex-col justify-start mt-8 ">
            <h1 className=" text-6xl text-white font-bold">
              Building with Precision. Managing with Purpose
            </h1>
            <p className=" text-white font-light w-[20rem]">
              Future-driven project management and consultancy across the UAE,
              Saudi Arabia, andEgypt.
            </p>
            <div className=" flex gap-8 mt-4">
              <Button
                btn="Explore Our Services"
                style="bg-[#8D0060] hover:bg-transparent  transition-all duration-300  border border-[#8D0060]  "
              />
              <Button btn="Get in Touch" style=" border border-[#8D0060]" />
            </div>
          </div>
          <div className="">
            <img
              alt="computer"
              src={computer}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between px-16 mt-8">
        <Cart title="ISO" description="Quality framework" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4"></div>
        <Cart title="End-t-End" description="Lifecycle oversight" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4"></div>
        <Cart title="+20" description="Years regional experince" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4"></div>
        <Cart title="PMP" description="Certified leadership" />
      </div>

      <Identification />
      <div className="px-16 mt-22 space-y-6">
        <h1 className=" text-2xl text-[#031556]">Our Core Services</h1>
        <div className=" grid grid-cols-3 gap-10">
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
      <div className=" px-16 mt-16">
        <img alt="map" src={map} className=" object-contain w-full h-auto" />
      </div>
      <div className=" py-16  ps-40 mt-8 space-y-6">
        <img alt="groupLeft" src={groupLeft} />
        <div className=" bg-[#004B8F]  py-12 px-8 rounded-2xl flex justify-between items-center"style={{background: "linear-gradient(to right, #004B8F 40%, #031556 100%)"  }}>
            <div className=" text-white">
                <h1 className=" text-2xl">Have a project in mind?</h1>
                <p>Let’s bring it to life — with clarity, control, and confidence.</p>
            </div>
            <div  className=" bg-white p-2 rounded-full gap-2 flex">
                <Button
                btn="Request a Proposal"
                style="bg-[#8D0060] text-sm  "
              />
                <Button
                btn="Contact US"
                style=" border border-[#8D0060] text-sm  "
                color="text-[#004B8F] "
              />
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
