import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

type CardAboutProps = {
  title: string;
  src: string;
  option ?: React.ReactNode;
};

export default function CardAbout({ title, src, option  }: CardAboutProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[80%] relative text-[#031556]">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-6  bg-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] rounded-2xl px-6 py-2 cursor-pointer hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-shadow duration-300"
      >
        <img alt={title} src={src} className="sm:w-14 sm:h-14 w-8 h-8 object-contain" />
        <p className="sm:text-base text-sm font-medium">{title}</p>
        <ChevronRight
          className={` ms-auto transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </div>
      {open && (
        <div className=" text-sm absolute left-0 top-full mt-2 w-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] rounded-b-2xl p-4 z-10">
          {option }
        </div>
      )}
    </div>
  );
}
