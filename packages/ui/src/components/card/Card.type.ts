import type { VariantProps } from 'class-variance-authority';
import { card } from './Card.style';
import { PropsWithChildren } from 'react';

export type CardProps = VariantProps<typeof card> &
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
