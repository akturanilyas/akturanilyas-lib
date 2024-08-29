import { cva } from 'class-variance-authority';

export const accordionStyle = cva('accordion', {
  variants: {
    variant: {
      glass: ['bg-slate-200', 'backdrop-blur-md', 'backdrop-filter', 'opacity-50'],
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});
