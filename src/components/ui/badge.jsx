import * as React from &quot;react&quot;
import { cva } from &quot;class-variance-authority&quot;;

import { cn } from &quot;@/lib/utils&quot;

const badgeVariants = cva(
  &quot;inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2&quot;,
  {
    variants: {
      variant: {
        default:
          &quot;border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80&quot;,
        secondary:
          &quot;border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80&quot;,
        destructive:
          &quot;border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80&quot;,
        outline: &quot;text-foreground&quot;,
      },
    },
    defaultVariants: {
      variant: &quot;default&quot;,
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
