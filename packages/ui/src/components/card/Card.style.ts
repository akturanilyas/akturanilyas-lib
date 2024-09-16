import { cva } from 'class-variance-authority';

export const card = cva(
  `
  flex rounded-lg border border-slate-200 text-slate-950
  shadow-sm p-4 bg-white
  `,
  {
    variants: {
      variant: {
        glass: [
          'backdrop-blur-md border-white/20 rounded-lg border-none bg-white bg-opacity-50 shadow-sm backdrop-filter',
        ],
      },
    },
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
