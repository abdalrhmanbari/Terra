type ButtonProps ={
  btn:string,
  style: string,
  color?:string
}
export default function Button({btn, style, color}:ButtonProps) {
    
  return (
    <button className={` ${color || "WhiteText"}    rounded-full ${style}`}>{btn}</button>
  )
}
