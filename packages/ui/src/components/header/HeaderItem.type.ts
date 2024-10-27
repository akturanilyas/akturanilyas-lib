import { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { headerItem } from './HeaderItem.style';
import { AnchorProps } from '../anchor/Anchor.type';

export type HeaderItemProps = {
  item: HeaderItem;
} & VariantProps<typeof headerItem>;

export type HeaderItemBase = {
  key: string;
  className?: string;
  textClassName?: string;
  title: string;
  disabled?: boolean;
  wip?: boolean;
} & AnchorProps;

export type HeaderItemWithComponent = {
  component: ReactNode;
  key: string;
};

export type HeaderItem = HeaderItemWithComponent | HeaderItemBase;
