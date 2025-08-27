import { Check, ChevronRight } from "lucide-react";
type CardWithDecorationProps = {
  title: string;
};

const CardWithDecoration = ({ title }: CardWithDecorationProps) => {
  return (
    <div className="relative w-fit">
      <div className="absolute left-2 -top-2 w-3 h-[1px] bg-[#DB9FCE] rotate-[-70deg] rounded"></div>
      <div className="absolute -left-3 -top-1 w-4 h-[1px] bg-[#DB9FCE] rotate-[50deg] rounded"></div>
      <div className="absolute -left-6 top-2 w-4 h-[1px] bg-[#DB9FCE] rotate-[25deg] rounded"></div>
      <div className="flex items-center gap-6 text-[#031556] border border-[#DB9FCE] rounded-2xl w-fit py-2 px-3 shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-white">
        <Check className="w-4 h-4 text-[#031556]" />
        <p className="text-sm">{title}</p>
        <ChevronRight className="w-4 h-4 ms-6 text-[#031556]" />
      </div>
    </div>
  );
};

export default CardWithDecoration;

