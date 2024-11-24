import { PropsWithChildren } from "react"
import { cn } from "../../utils/cn"

type ButtonProps = {
  variant?: "primary" | "secondary"
  className?: React.ComponentProps<"button">["className"]
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

const Button = ({ variant = "primary", className = "", onClick, size = "md", children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        "font-normal rounded-lg shadow-[0px_0px_10px] shadow-red-100/40",
        {
          "bg-black text-white hover:bg-zinc-800": variant === "primary",
          "bg-white text-black hover:bg-stone-50": variant === "secondary",

          // Size-based styles
          "px-3 py-2 text-sm": size === "sm",
          "px-6 py-2 text-sm": size === "md",
          "px-10 py-3 text-base font-medium": size === "lg"
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
