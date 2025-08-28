import { Check, ChevronRight } from "lucide-react";
type CardWithDecorationProps = {
  title: string;
  isColor?:boolean
  isIcon?: boolean,
  styleColor?:string
  style:string
};

const CardWithDecoration = ({ title, isColor, isIcon,styleColor,style }: CardWithDecorationProps) => {
  return (
    <div className="relative w-fit text-[#031556">
      <div className="absolute left-2 -top-2 w-3 h-[1px] bg-[#DB9FCE] rotate-[-70deg] rounded"></div>
      <div className="absolute -left-3 -top-1 w-4 h-[1px] bg-[#DB9FCE] rotate-[50deg] rounded"></div>
      <div className="absolute -left-6 top-2 w-4 h-[1px] bg-[#DB9FCE] rotate-[25deg] rounded"></div>
      <div className={`flex items-center gap-4 ] border border-[#DB9FCE] rounded-full w-fit   shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-white ${style}`}>
        <Check className="w-4 h-4 text-[#031556]" />
        <p className="sm:text-sm text-xs">{title}</p>
        { isIcon &&
        <ChevronRight className="w-4 h-4 ms-8 text-[#031556]" />
        }
        { isColor &&
        <div className={`w-10 h-10 rounded-full ${styleColor}`}>
        </div>

        }
      </div>
    </div>
  );
};

export default CardWithDecoration;

