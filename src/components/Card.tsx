type CardProps = {
  img: string;
  title: string;
  description: string;
};
export default function Card({ img, title, description }: CardProps) {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-4 bg-white rounded-2xl  shadow-[0_10px_25px_rgba(0,0,0,0.1),0_-10px_25px_rgba(0,0,0,0.1)]   p-6 transition-transform duration-300  hover:scale-105">
      <img alt={title} src={img} className=" max-w-[4rem]" />
      <h1 className="text-[#031556]">{title}</h1>
      <p className="  text-sm  text-[#031556] ">{description}</p>
    </div>
  );
}
