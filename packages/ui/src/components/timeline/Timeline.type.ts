import { ReactNode } from 'react';

export type TimelineProps = {
  variant?: 'glass';
  className?: string;
  items: Array<TimelineItemType>;
};

export type TimelineItemType = {
  img: {
    src: string;
    alt?: string;
    title?: string;
    className?: string;
    sizes?: string;
  };
  color: string;
  children: ReactNode;
};
