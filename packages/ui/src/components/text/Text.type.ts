import { HTMLAttributes } from 'react';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  text: string;
}
