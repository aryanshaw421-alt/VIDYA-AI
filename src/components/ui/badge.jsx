import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:focus:ring-neutral-300 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#0E1015] text-white dark:bg-white dark:text-[#0E1015]",
        secondary:
          "border-transparent bg-black/[0.05] text-neutral-900 dark:bg-white/[0.08] dark:text-neutral-100",
        destructive:
          "border-transparent bg-rose-500 text-white dark:bg-rose-900 dark:text-rose-50",
        outline: "text-neutral-900 dark:text-neutral-100 border-black/[0.1] dark:border-white/[0.15]",
        success:
          "border-emerald-200/60 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
        warning:
          "border-amber-200/60 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
        accent:
          "border-black/10 bg-[#D4F038] text-neutral-900 font-bold shadow-sm"
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
