import { FC } from 'react';
import { HeaderProps } from './Header.type';
import HeaderItem from './HeaderItem';
import { cn } from '../../utils';
import { header } from './Header.style';
import Div from '../div/Div';

export const Header: FC<HeaderProps> = (props) => {
  const { items, suffixItems, className } = props;

  return (
    <header className={cn(header({ className, type: 'glass' }))}>
      <>
        <Div className={'flex-row gap-4'}>
          {items.map((item) => (
            <HeaderItem key={item.key} item={item} />
          ))}
        </Div>

        {suffixItems && (
          <Div className={'flex-row-reverse gap-4'}>
            {suffixItems.map((item) => (
              <HeaderItem key={item.key} item={item} />
            ))}
          </Div>
        )}
      </>
    </header>
  );
};

export default Header;
