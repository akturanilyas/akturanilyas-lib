import { PropsWithChildren, ReactNode } from 'react';
import { ButtonProps } from '../button/Button.type';

export type AccordionTitleProps = PropsWithChildren<{
  title?: {
    text?: string;
    className?: string;
  };
  icon?: ReactNode;
  className?: string;
}> &
  Omit<ButtonProps, 'title'>;
