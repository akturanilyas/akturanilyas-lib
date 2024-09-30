import { FC } from 'react';
import { HeaderItemProps } from './HeaderItem.type';
import Text from '../text/Text';
import { cn } from '../../utils';
import { headerItem, headerText } from './HeaderItem.style';
import { Button } from '../index';

export const HeaderItem: FC<HeaderItemProps> = (props) => {
  const { item, className } = props;

  if ('component' in item) {
    return <>{item.component}</>;
  }

  return (
    <Button {...item} onClick={() => item.onClick && item.onClick(item.key)} className={headerItem({ className })}>
      <Text className={cn(headerText())} text={item.title} />
      {item.wip && <sup className={'text-3xs font-bold text-orange-500'}>WIP</sup>}
    </Button>
  );
};

export default HeaderItem;
