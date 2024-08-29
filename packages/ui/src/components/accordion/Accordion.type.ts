import { HTMLProps, PropsWithChildren, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { accordionStyle } from './Accordion.style';

export type AccordionProps = PropsWithChildren<Omit<HTMLProps<HTMLDivElement>, 'title' | 'defaultValue'>> & {
  title: {
    text: string;
    className?: string;
  };
  defaultValue?: boolean;
} & VariantProps<typeof accordionStyle> & {
    icon?: ReactNode;
  };
