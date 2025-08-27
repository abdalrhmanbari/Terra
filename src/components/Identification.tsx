import identification from "../assets/Identification.jpg";
import CardWithDecoration from "./CardWithDecoration";
import group from "../assets/group.png";
export default function Identification() {
  return (
    <div className=" mt-32 px-16  gap-16 ">
      <div className=" flex items-center justify-between">
        <div className=" space-y-4">
          <h1 className="text-[#031556] text-xl">Who We Are?</h1>
          <p className="text-[#031556]  max-w-[30rem] ">
            Terra is a regional project management consultancy transforming how
            complex projects are designed, managed, and delivered. Known for our
            precision and integrity, we partner with governments, developers,
            and private clients to deliver strategic results across every phase
            of the project lifecycle.
          </p>
          <h5 className="text-[#031556] text-sm mt-2 ">
            [Learn More About Us]
          </h5>
        </div>
        <div className=" max-w-[35rem]">
          <img
            alt="identification"
            src={identification}
            className=" w-full bg-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 mt-28">
        <div className="flex justify-between gap-32">
          <CardWithDecoration title="Regional Delivery Excellence" />
          <CardWithDecoration title="PMP-Certified leadership" />
          <CardWithDecoration title="Local Authority Compliance" />
        </div>

        <CardWithDecoration title="Local Authority Compliance" />
      </div>
      <div className=" mt-20 me-24  flex items-start  justify-end">
        <img alt="group" src={group} />
      </div>
    </div>
  );
}
