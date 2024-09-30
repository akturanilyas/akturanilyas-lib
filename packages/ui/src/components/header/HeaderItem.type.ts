import { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { headerItem } from './HeaderItem.style';
import { ButtonProps } from '../button/Button.type';

export type HeaderItemProps = {
  item: HeaderItem;
  className?: string;
} & VariantProps<typeof headerItem>;

export type HeaderItemBase = {
  key: string;
  className?: string;
  title: string;
  disabled?: boolean;
  wip?: boolean;
  onClick?: (key: string) => void;
} & ButtonProps;

export type HeaderItemWithComponent = {
  component: ReactNode;
  key: string;
};

export type HeaderItem = HeaderItemWithComponent | HeaderItemBase;
