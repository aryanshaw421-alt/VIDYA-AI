import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { ArrowRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 cursor-pointer select-none group",
  {
    variants: {
      variant: {
        default:
          "bg-[#0E1015] text-white hover:bg-[#1f242d] dark:bg-white dark:text-[#0E1015] dark:hover:bg-neutral-100 shadow-sm",
        primary:
          "bg-[#0E1015] text-white hover:bg-[#1f242d] dark:bg-white dark:text-[#0E1015] dark:hover:bg-neutral-100 shadow-sm",
        destructive:
          "bg-rose-500 text-white hover:bg-rose-600 dark:bg-rose-900 dark:text-rose-50 dark:hover:bg-rose-900/90 shadow-sm",
        outline:
          "border border-black/[0.1] dark:border-white/[0.15] bg-transparent hover:bg-black/[0.04] dark:hover:bg-white/[0.08] text-neutral-900 dark:text-neutral-100",
        secondary:
          "bg-black/[0.04] text-neutral-900 hover:bg-black/[0.08] dark:bg-white/[0.08] dark:text-neutral-50 dark:hover:bg-white/[0.12] border border-black/[0.06] dark:border-white/[0.08]",
        ghost:
          "hover:bg-black/[0.04] hover:text-neutral-900 dark:hover:bg-white/[0.08] dark:hover:text-neutral-50",
        link:
          "text-blue-600 underline-offset-4 hover:underline dark:text-blue-400",
        ai:
          "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white hover:opacity-95 shadow-sm"
      },
      size: {
        default: "h-9 px-4 py-2 text-xs sm:text-sm",
        md: "h-9 px-4 py-2 text-xs sm:text-sm",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-11 rounded-full px-7 text-sm sm:text-base font-semibold",
        icon: "h-9 w-9 rounded-full",
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
