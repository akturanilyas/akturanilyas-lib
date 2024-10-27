import { FC } from 'react';
import { HeaderItemProps } from './HeaderItem.type';
import Text from '../text/Text';
import { cn } from '../../utils';
import { headerItem, headerText } from './HeaderItem.style';
import { Button } from '../index';
import Anchor from '../anchor/Anchor';

export const HeaderItem: FC<HeaderItemProps> = (props) => {
  const { item } = props;

  if ('component' in item) {
    return <>{item.component}</>;
  }

  return (
    <Anchor {...item} className={headerItem({ className: item.className })}>
      <Text className={cn(headerText({ className: item.textClassName }))} text={item.title} />
      {item.wip && <sup className={'text-3xs font-bold text-orange-500'}>WIP</sup>}
    </Anchor>
  );
};

export default HeaderItem;
