import { clsx } from &quot;clsx&quot;;
import { twMerge } from &quot;tailwind-merge&quot;

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
