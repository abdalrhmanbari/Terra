import Navbar from "../Layout/Navbar";
import Banner from "../assets/Banner.png";
import Computer from "../assets/computer.png";
import Button from "../components/Button";
import Cart from "../components/Cart";
import Identification from "../components/Identification";
import Card from "../components/Card";
import Icon from "../assets/BG.png";
import Map from "../assets/Map.jpg";
import GroupLeft from "../assets/groupLeft.png";
export default function Home() {
  return (
 <div className=" mx-auto overflow-x-hidden">
<div
  className="sm:min-h-screen flex flex-col px-4 sm:px-16 py-8 text-[#031556]   relative mx-auto "
  style={{
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", 
  }}
>
        <Navbar />
        <div className=" sm:flex  justify-between mt-8">
          <div className=" sm:w-1/2  space-y-4 flex flex-col justify-start sm:mt-8 ">
            <h1 className=" sm:text-6xl text-xl text-white font-bold">
              Building with Precision. Managing with Purpose
            </h1>
            <p className=" text-white font-light sm:w-[20rem] text-sm sm:text-base ">
              Future-driven project management and consultancy across the UAE,
              Saudi Arabia, andEgypt.
            </p>
            <div className=" flex gap-8 mt-4">
              <Button
                btn="Explore Our Services"
                style="bg-[#8D0060] hover:bg-transparent text-sm  sm:text-base transition-all duration-300  border border-[#8D0060]  "
              />
              <Button btn="Get in Touch" style=" border border-[#8D0060] text-sm sm:text-base " color=" text-[#031556] sm:text-white" />
            </div>
          </div>
          <div className="sr-only sm:not-sr-only">
            <img
              alt="computer"
              src={Computer}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="  flex items-center flex-wrap sm:justify-between justify-center  px-4 sm:px-16 mt-8 gap-8">
        <Cart title="ISO" description="Quality framework" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4 sr-only sm:not-sr-only"></div>
        <Cart title="End-t-End" description="Lifecycle oversight" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4 sr-only sm:not-sr-only"></div>
        <Cart title="+20" description="Years regional experince" />
        <div className="w-0.5 h-16 bg-[#E1BEE7] mx-4 sr-only sm:not-sr-only"></div>
        <Cart title="PMP" description="Certified leadership" />
      </div>

      <Identification isActiveImage={true} />
      <div className="sm:px-16 px-4 sm:mt-22 mt-16 space-y-6">
        <h1 className=" text-2xl text-[#031556] ">Our Core Services</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-auto justify-items-center">
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <Card
            img={`${Icon}`}
            title="Project & Program Management"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
      <div className=" px-4 sm:px-16 mt-16 text-center space-y-6 text-[#031556]">
        <h1 className=" text-2xl ">Where We Operate</h1>
        <img alt="map" src={Map} className=" object-contain w-full h-auto " />
        <h2 className=" text-base sm:text-2xl  mt-12">Trusted by Leading Developers</h2>
        <p className=" text-sm sm:text-base">we’ve supported high-impact projects for some of the region’s most respected developers
and consultancies.</p>
<div className=" grid grid-cols-2 lg:grid-cols-4 justify-items-center mt-12">

    <div className="flex items-center flex-col gap-2 ">
      <img alt="." src={Icon} className=" sm:max-w-[4rem]  max-w-[3rem]"/>
      <p>Real Estate</p>
    </div>
    <div className="flex items-center flex-col gap-2">
      <img alt="." src={Icon} className=" sm:max-w-[4rem]  max-w-[3rem]"/>
      <p>Real Estate</p>
    </div>
    <div className="flex items-center flex-col gap-2">
      <img alt="." src={Icon} className=" sm:max-w-[4rem]  max-w-[3rem]"/>
      <p>Real Estate</p>
    </div>
    <div className="flex items-center flex-col gap-2">
      <img alt="." src={Icon} className=" sm:max-w-[4rem]  max-w-[3rem]"/>
      <p>Real Estate</p>
    </div>
</div>
      </div>
      <div className=" py-16  sm:ps-40 ps-14 overflow-hidden mt-8 space-y-6 ">
        <img alt="groupLeft" src={GroupLeft} className=" sr-only sm:not-sr-only" />
        <div className= "    right-0 ms-auto  bg-[#004B8F] space-y-3   sm:py-12 sm:px-8 p-3 rounded-l-2xl flex flex-col sm:flex-row  justify-between items-center"style={{background: "linear-gradient(to right, #004B8F 40%, #031556 100%)"  }}>
            <div className=" text-white space-y-2">
                <h1 className=" sm:text-2xl text-base">Have a project in mind?</h1>
                <p className=" text-xs sm:text-base">Let’s bring it to life — with clarity, control, and confidence.</p>
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
    </div>
  );
}
