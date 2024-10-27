import { cva } from 'class-variance-authority';

export const headerItem = cva(
  `flex flex-row rounded-xl px-2 py-1 text-center items-center 
  justify-center backdrop-blur-md shadow-lg disabled:cursor-not-allowed 
  disabled:text-slate-300 hover:bg-slate-200 duration-300 disabled:bg-slate-100`,
  {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  },
);

export const headerText = cva('text-sm font-bold');
