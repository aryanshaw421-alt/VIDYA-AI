import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { ArrowRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407E8C] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-[#5499A8] cursor-pointer select-none group",
  {
    variants: {
      variant: {
        default:
          "bg-[#407E8C] text-white hover:bg-[#336570] active:bg-[#264D56] shadow-sm shadow-[#407E8C]/20 border border-[#407E8C]",
        primary:
          "bg-[#407E8C] text-white hover:bg-[#336570] active:bg-[#264D56] shadow-sm shadow-[#407E8C]/20 border border-[#407E8C]",
        secondary:
          "bg-white/55 dark:bg-[#083A4F]/60 backdrop-blur-md border border-[#083A4F]/15 dark:border-white/15 text-[#083A4F] dark:text-[#FAF9F8] hover:bg-white/85 dark:hover:bg-[#083A4F]/85 hover:border-[#407E8C]/50 hover:-translate-y-0.5 active:translate-y-0 shadow-xs",
        glass:
          "bg-white/50 dark:bg-[#083A4F]/50 backdrop-blur-md border border-white/40 dark:border-white/12 text-[#083A4F] dark:text-[#FAF9F8] hover:bg-white/80 dark:hover:bg-[#083A4F]/80 hover:border-[#407E8C]/40 hover:-translate-y-0.5 active:translate-y-0 shadow-xs",
        accent:
          "bg-[#A58D66] text-white hover:bg-[#8D7652] active:bg-[#6E5B3D] shadow-sm shadow-[#A58D66]/20 border border-[#A58D66]",
        premium:
          "bg-[#A58D66] text-white hover:bg-[#8D7652] active:bg-[#6E5B3D] shadow-sm shadow-[#A58D66]/20 border border-[#A58D66]",
        dark:
          "bg-[#083A4F] text-white hover:bg-[#052735] active:bg-[#031720] shadow-sm shadow-[#083A4F]/30 border border-[#083A4F]",
        destructive:
          "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
        outline:
          "border border-[#083A4F]/20 dark:border-[#E5E1DD]/20 bg-transparent hover:bg-[#E5E1DD]/30 dark:hover:bg-white/[0.06] text-[#083A4F] dark:text-[#E5E1DD]",
        ghost:
          "hover:bg-[#407E8C]/10 text-[#083A4F] dark:text-[#E5E1DD] hover:text-[#083A4F] dark:hover:text-white",
        link:
          "text-[#407E8C] underline-offset-4 hover:underline dark:text-[#5499A8]",
        ai:
          "bg-gradient-to-r from-[#083A4F] via-[#407E8C] to-[#083A4F] text-white hover:opacity-95 shadow-sm border border-[#407E8C]/30"
      },
      size: {
        default: "h-9 px-4 py-2 text-xs sm:text-sm",
        md: "h-9 px-4 py-2 text-xs sm:text-sm",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-xl px-6 text-sm sm:text-base font-semibold",
        icon: "h-9 w-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  icon: Icon,
  showArrow = false,
  isLoading = false,
  children,
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-105" />
      ) : null}
      {children}
      {showArrow && !isLoading && (
        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
