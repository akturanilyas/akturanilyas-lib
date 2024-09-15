import type { VariantProps } from 'class-variance-authority';
import { card } from './Card.style';
import { PropsWithChildren } from 'react';
import { DivProps } from '../div/Div.type';

export type CardProps = VariantProps<typeof card> &
  Omit<DivProps, 'title'> &
  PropsWithChildren<{
    title?: {
      className?: string;
      text: string;
    };
    description?: {
      className?: string;
      text: string;
    };
    className?: string;
  }>;
