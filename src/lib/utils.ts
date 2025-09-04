import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
} 

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
  
	return new Intl.DateTimeFormat("fr-FR", {
	  day: "numeric",
	  month: "long",
	  year: "numeric",
	}).format(date);
  }
  