import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#407E8C] focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#083A4F] text-white dark:bg-[#0E5573] dark:text-white",
        teal:
          "border-transparent bg-[#407E8C] text-white shadow-xs",
        gold:
          "border-transparent bg-[#A58D66] text-white shadow-xs",
        sand:
          "border-[#083A4F]/10 bg-[#E5E1DD] text-[#083A4F] dark:bg-[#E5E1DD]/20 dark:text-[#E5E1DD]",
        secondary:
          "border-[#083A4F]/10 bg-[#E5E1DD]/60 text-[#083A4F] dark:bg-white/[0.08] dark:text-[#FAF9F8]",
        destructive:
          "border-transparent bg-rose-600 text-white",
        outline: 
          "text-[#083A4F] dark:text-[#E5E1DD] border-[#083A4F]/20 dark:border-[#E5E1DD]/20",
        success:
          "border-emerald-200/60 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
        warning:
          "border-[#A58D66]/40 bg-[#A58D66]/15 text-[#8D7652] dark:text-[#C4AE88]",
        accent:
          "border-[#A58D66]/30 bg-[#A58D66] text-white font-bold shadow-xs"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
