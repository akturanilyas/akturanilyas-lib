import { PropsWithChildren } from 'react';

export type TimelineItemProps = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
} & PropsWithChildren;
