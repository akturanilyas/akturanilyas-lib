import { FC } from 'react';
import { ButtonProps } from './Button.type';
import { button } from './Button.style';
import { cn } from '../../utils';

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => (
  <button className={cn(button({ size, variant, className }))} {...props} />
);

export default Button;
