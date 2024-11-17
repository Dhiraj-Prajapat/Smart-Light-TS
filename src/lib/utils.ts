<<<<<<< HEAD
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}
=======
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs));
}
>>>>>>> a559dd53e30a15eb347f0b9ebf49b01babc183d3
