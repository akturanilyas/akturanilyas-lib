import { HTMLProps, PropsWithChildren } from 'react';

export type AccordionProps = PropsWithChildren<Omit<HTMLProps<HTMLDivElement>, 'title'>> & {
  title: {
    text: string;
    className?: string;
  };
};
