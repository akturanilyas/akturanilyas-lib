import { ButtonHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { button } from './Button.style';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    icon?: ReactNode;
  };
