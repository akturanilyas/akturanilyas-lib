import { cva } from 'class-variance-authority';

export const button = cva('button', {
  variants: {
    rounded: {
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
    variant: {
      outlined: ['bg-transparent', 'text-primary', 'border-2 border-primary'],
      text: ['bg-transparent', 'text-primary', 'border-transparent'],
    },
  },
  compoundVariants: [
    { variant: 'outlined', class: 'rounded-md' },
    { variant: 'text', class: 'hover:bg-slate-200' },
  ],
  defaultVariants: {
    size: 'medium',
    rounded: 'md',
  },
});
