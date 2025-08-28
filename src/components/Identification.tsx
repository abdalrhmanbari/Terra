import IdentificationImage from "../assets/Identification.jpg";
import CardWithDecoration from "./CardWithDecoration";
import Group from "../assets/group.png";
import Vector from "../assets/Vector 32.png"
type  IdentificationProps ={
  style?:string,
  isActive?: boolean,
  isActiveImage?:boolean
}
export default function Identification({style,isActive,isActiveImage }: IdentificationProps) {
  return (
    <div className=" sm:mt-32 mt-16 sm:px-16 px-4  gap-16 text-[#031556] ">
      <div className={`flex items-center justify-between ${style}`}>
        <div className=" space-y-4">
          <h1 className=" text-xl">Who We Are?</h1>
          <p className="  sm:max-w-[30rem] sm:text-base text-sm ">
            Terra is a regional project management consultancy transforming how
            complex projects are designed, managed, and delivered. Known for our
            precision and integrity, we partner with governments, developers,
            and private clients to deliver strategic results across every phase
            of the project lifecycle.
          </p>
          <h5 className=" text-sm mt-2 ">
            [Learn More About Us]
          </h5>
        </div>
        <div className=" sm:max-w-[35rem] sr-only sm:not-sr-only">
          <img
            alt="identification"
            src={IdentificationImage}
             className="w-full object-contain "
          />
        </div>
      </div>
      {isActive && <div className=" flex flex-col text-center items-center justify-center mt-12  gap-4">
        <img alt="Vector"  src={Vector}/>
        <h1 className="  mt-8 text-2xl">Leaderships You Can Trust</h1>
        <p className=" sm:max-w-[40rem]">Our leadership team brings over two decades of experience across the region’s most complex and iconic developments.
          <p className="sm:max-w-[40rem]">

Led by certified project managers, quantity surveyors, and engineers, we combine big-picture strategy with execution-level precision.
          </p>
</p>
      </div>

      }
      <div className=" grid grid-cols-1 gap-6 sm:gap-8 mt-16 justify-items-center">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-32" >
          <CardWithDecoration title="Regional Delivery Excellence"  isIcon style="py-2 px-3"/>
          <CardWithDecoration title="PMP-Certified leadership"isIcon style=" py-2 px-3" />
          <CardWithDecoration title="Local Authority Compliance" isIcon style="py-2 px-3" />
        </div>
          <div className=" flex justify-center">

        <CardWithDecoration title="Local Authority Compliance"isIcon style="py-2 px-3" />
          </div>
      </div>
      {isActiveImage && 
      <div className=" mt-20 me-24  flex items-start  justify-end sr-only sm:not-sr-only">
        <img alt="group" src={Group}  className=" s"/>
      </div>
      }
    </div>
  );
}
