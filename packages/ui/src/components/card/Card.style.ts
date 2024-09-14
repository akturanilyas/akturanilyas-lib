import { cva } from 'class-variance-authority';

export const card = cva(
  `
  flex rounded-lg border border-slate-200 bg-white text-slate-950 
  shadow-sm
  p-4
  `,
  {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
);

export const cardHeader = cva('flex py-2', {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export const cardBody = cva('flex py-2', {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});
