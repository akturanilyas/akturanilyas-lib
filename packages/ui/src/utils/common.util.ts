import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export const cn = (...inputs: Array<ClassValue>) => twMerge(clsx(inputs));
