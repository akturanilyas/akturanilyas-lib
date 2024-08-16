import { FC } from 'react';
import { ButtonProps } from './Button.type';
import { button } from './Button.style';
import { cn } from '../../utils';

const Button: FC<ButtonProps> = (props) => {
  const { className, size, variant: _variant, ...rest } = props;

  const variant = _variant || props.icon ? 'icon' : undefined;

  return (
    <button className={cn(button({ size, variant, className }))} {...rest}>
      {rest.icon}
      {rest.children}
    </button>
  );
};

export default Button;
