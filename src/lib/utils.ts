import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImagePath(imagePath:string) {
  const basePath = process.env.BASE_PATH || '';
  return `${basePath}/${imagePath}`;
}
