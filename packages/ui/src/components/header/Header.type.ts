import { type HeaderItem } from './HeaderItem.type';
import { VariantProps } from 'class-variance-authority';
import { header } from './Header.style';

export type HeaderProps = {
  items: Array<HeaderItem>;
  suffixItems?: Array<HeaderItem>;
  className?: string;
} & VariantProps<typeof header>;
