import * as React from &quot;react&quot;
import { Slot } from &quot;@radix-ui/react-slot&quot;
import { cva } from &quot;class-variance-authority&quot;;

import { cn } from &quot;@/lib/utils&quot;

const buttonVariants = cva(
  &quot;inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0&quot;,
  {
    variants: {
      variant: {
        default:
          &quot;bg-primary text-primary-foreground shadow hover:bg-primary/90&quot;,
        destructive:
          &quot;bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90&quot;,
        outline:
          &quot;border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground&quot;,
        secondary:
          &quot;bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80&quot;,
        ghost: &quot;hover:bg-accent hover:text-accent-foreground&quot;,
        link: &quot;text-primary underline-offset-4 hover:underline&quot;,
      },
      size: {
        default: &quot;h-9 px-4 py-2&quot;,
        sm: &quot;h-8 rounded-md px-3 text-xs&quot;,
        lg: &quot;h-10 rounded-md px-8&quot;,
        xl: &quot;h-12 rounded-md px-8&quot;,
        icon: &quot;h-9 w-9&quot;,
      },
    },
    defaultVariants: {
      variant: &quot;default&quot;,
      size: &quot;default&quot;,
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : &quot;button&quot;
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = &quot;Button&quot;

export { Button, buttonVariants }
