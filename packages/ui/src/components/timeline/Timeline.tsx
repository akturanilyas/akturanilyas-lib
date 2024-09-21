import { Card, Div } from '..';
import { TimelineProps } from './Timeline.type';
import { FC } from 'react';
import { cn } from '../../utils';
import TimelineItem from './TimelineItem';
import { TimelineItemProps } from './TimelineItem.type';

export const Timeline: FC<TimelineProps> & {
  TimelineItem: FC<TimelineItemProps>;
} = (props) => {
  const { items, variant, className } = props;

  return (
    <Card variant={variant} className={cn('gap-4', className)}>
      {items.map((item, index) => (
        <Div className={'relative gap-4'} key={index}>
          <Div className={'flex-row'}>
            <Div className={'rounded-xl pr-2'}>
              <img
                className={cn('z-10 rounded-lg border border-green-400', item.img.className)}
                src={item.img.src}
                width={48}
                height={48}
                alt={'item.company'}
                title={'experience.company'}
                sizes={'48px'}
              />
            </Div>
            {item.children}
          </Div>
          <HorizontalLine className={cn(item.color, { 'h-full': index + 1 === items.length })} />
        </Div>
      ))}
    </Card>
  );
};

Timeline.TimelineItem = TimelineItem;

export default Timeline;

export const HorizontalLine = ({ className }: { className: string }) => (
  <Div className={`absolute left-[22px] h-[calc(100%+16px)] w-1 bg-green-400 ${className}`} />
);
