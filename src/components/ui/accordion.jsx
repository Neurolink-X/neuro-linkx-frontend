&quot;use client&quot;

import * as React from &quot;react&quot;
import * as AccordionPrimitive from &quot;@radix-ui/react-accordion&quot;
import { ChevronDown } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(&quot;border-b&quot;, className)} {...props} />
))
AccordionItem.displayName = &quot;AccordionItem&quot;

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className=&quot;flex&quot;>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        &quot;flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180&quot;,
        className
      )}
      {...props}>
      {children}
      <ChevronDown
        className=&quot;h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200&quot; />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className=&quot;overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down&quot;
    {...props}>
    <div className={cn(&quot;pb-4 pt-0&quot;, className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
