import { cva } from 'class-variance-authority';

export const headerItem = cva('flex flex-row border rounded-xl px-2 py-1', {
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
});

export const headerText = cva('text-sm font-bold');
