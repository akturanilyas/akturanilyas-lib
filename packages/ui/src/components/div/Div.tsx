import { DivProps } from './Div.type';
import { forwardRef } from 'react';
import { cn } from '../../utils';

const Div = forwardRef<HTMLDivElement, DivProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classes = cn('flex flex-col', className);

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  );
});

export default Div;
