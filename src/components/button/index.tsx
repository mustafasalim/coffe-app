import classNames from "classnames"

interface ButtonProps {
  variant?: any
  text: string
}
function Button({ variant, text }: ButtonProps) {
  return (
    <button
      className={classNames(" hover:opacity-45 transition-all", {
        "bg-[#6F757C] font-bold px-3 text-[#FEF7EE] p-2 rounded-lg":
          variant === "gray",
        "bg-red-500  font-boldpx-3 text-[#FEF7EE] p-2 rounded-lg":
          variant === "danger",
        "bg-yellow-500 font-bold px-3 text-[#111315] p-0.5 rounded-2xl":
          variant === "yellow",
        "bg-transparent font-bold px-3 p-2 text-[#FEF7EE] ":
          variant === "normal",
        "bg-[#BEE3CC] font-bold text-[#111315] px-2 rounded":
          variant === "price",
      })}
    >
      {text}
    </button>
  )
}

export default Button
