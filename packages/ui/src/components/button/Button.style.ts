import { cva } from 'class-variance-authority';

export const button = cva('flex text-center items-center justify-center', {
  variants: {
    rounded: {
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
    variant: {
      outlined: ['bg-transparent', 'text-primary', 'border-2 border-primary', 'hover:bg-slate-200'],
      text: ['bg-transparent', 'text-primary', 'border-transparent'],
      icon: ['gap-2'],
    },
  },
  compoundVariants: [
    { variant: 'outlined', class: 'rounded-md' },
    { variant: 'text', class: 'hover:bg-slate-200' },
    { variant: 'icon', className: ['bg-transparent', 'text-primary', 'border-2 border-primary', 'hover:bg-slate-200'] },
  ],
  defaultVariants: {
    size: 'medium',
    rounded: 'md',
  },
});
