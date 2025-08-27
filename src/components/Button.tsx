type ButtonProps ={
  btn:string,
  style: string,
  color?:string
}
export default function Button({btn, style, color}:ButtonProps) {
    
  return (
    <button className={` ${color || "text-[white]"}  p-2 px-4 rounded-full ${style}`}>{btn}</button>
  )
}
