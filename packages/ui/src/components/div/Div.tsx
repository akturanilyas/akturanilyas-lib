import { DivProps } from './Div.type';
import { FC } from 'react';
import { cn } from '../../utils';

export const Div: FC<DivProps> = (props) => {
  const { className, children, ...rest } = props;

  const classes = cn('flex flex-row', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
