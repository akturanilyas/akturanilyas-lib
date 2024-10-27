import { cva } from 'class-variance-authority';

export const header = cva('flex flex-row border rounded-xl p-2 justify-between bg-white w-full sticky top-0 z-10 animate-slide-down overflow-x-auto gap-4', {
  variants: {
    type: {
      glass: 'backdrop-blur-md border-white/20 rounded-lg border-none bg-white bg-opacity-50 shadow-sm backdrop-filter',
    },
  },
});
