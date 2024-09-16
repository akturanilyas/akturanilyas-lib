import { Div } from '..';
import { FC } from 'react';
import { TimelineItemProps } from './TimelineItem.type';
import Text from '../text/Text';
import { getFormattedDate, getFormattedDiff } from '../../utils/dateUtils';
import { GoDotFill } from 'react-icons/go';

export const TimelineItem: FC<TimelineItemProps> = (props) => {
  const { title, subtitle, endDate, startDate, children } = props;

  return (
     <Div className='w-full flex-col'>
        <Div className='flex-row items-center justify-between'>
          <Div className='items-center gap-2'>
            <Text className='font-semibold' text={title} />
          </Div>
          <Div className={'text-muted-foreground flex-row gap-1 text-xs'}>
            <Text text={getFormattedDate(startDate)} />
            <Text text={'-'} />
            <Text text={endDate ? getFormattedDate(endDate) : 'Present'} />
            <Div className={'flex-row items-center'}>
              <GoDotFill size={8} className={'mr-1'}/>
              <Text text={getFormattedDiff(startDate, endDate)} />
            </Div>
          </Div>
        </Div>
        <Div className='text-xs font-medium'>{subtitle}</Div>

       {children}
      </Div>
  );
};

export default TimelineItem;
