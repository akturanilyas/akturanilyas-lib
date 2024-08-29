import { PropsWithChildren, ReactNode } from 'react';
import { ButtonProps } from '../button/Button.type';
import { accordionStyle } from './Accordion.style';
import { VariantProps } from 'class-variance-authority';
import { AccordionProps } from './Accordion.type';

export type AccordionTitleProps = PropsWithChildren<{
  title?: {
    text?: string;
    className?: string;
  };
  icon?: ReactNode;
  className?: string;
  isOpen: boolean;
}> &
  Omit<ButtonProps, 'title' | 'variant'> &
  Pick<AccordionProps, 'variant'>;
