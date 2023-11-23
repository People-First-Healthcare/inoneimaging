import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function strBoolToBoo(value: string): boolean {
  if (value.toLowerCase() === "true") return true;
  return false;
}
