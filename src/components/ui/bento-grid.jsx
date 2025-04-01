import { ArrowRight } from &quot;lucide-react&quot;;

import { Button } from &quot;@/components/ui/button&quot;;
import { cn } from &quot;@/lib/utils&quot;;



const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        &quot;grid w-full auto-rows-[22rem] grid-cols-3 gap-4&quot;,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      &quot;group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl&quot;,
      // light styles
      &quot;bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]&quot;,
      // dark styles
      &quot;transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]&quot;,
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className=&quot;pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10&quot;>
      <Icon className=&quot;h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75&quot; />
      <h3 className=&quot;text-xl font-semibold text-neutral-700 dark:text-neutral-300&quot;>
        {name}
      </h3>
      <p className=&quot;max-w-lg text-neutral-400&quot;>{description}</p>
    </div>

    <div
      className={cn(
        &quot;pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100&quot;,
      )}
    >
      <Button variant=&quot;ghost&quot; asChild size=&quot;sm&quot; className=&quot;pointer-events-auto&quot;>
        <a href={href}>
          {cta}
          <ArrowRight className=&quot;ms-2 h-4 w-4 rtl:rotate-180&quot; />
        </a>
      </Button>
    </div>
    <div className=&quot;pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10&quot; />
  </div>
);

export { BentoCard, BentoGrid };
