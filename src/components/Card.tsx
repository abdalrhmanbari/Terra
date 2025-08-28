type CardProps = {
  img: string;
  title: string;
  description: string;
};
export default function Card({ img, title, description }: CardProps) {
  return (
    <div className=" text-[#031556] flex sm:w-fit w-[280px] flex-col items-center justify-center gap-4 bg-white rounded-2xl  shadow-[0_10px_25px_rgba(0,0,0,0.1),0_-10px_25px_rgba(0,0,0,0.1)]   p-6 transition-transform duration-300  hover:scale-105">
      <img alt={title} src={img} className=" sm:max-w-[4rem]  max-w-[3rem] " />
      <h1 className=" text-base">{title}</h1>
      <p className="  sm:text-sm text-xs   ">{description}</p>
    </div>
  );
}
