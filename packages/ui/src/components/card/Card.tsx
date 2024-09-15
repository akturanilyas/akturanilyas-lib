import { CardProps } from './Card.type';
import { FC } from 'react';
import Div from '../div/Div';
import { cn } from '../../utils';
import { card, cardBody, cardHeader } from './Card.style';

const Card: FC<CardProps> = (props) => {
  const { className, title, description, variant, ...rest } = props;

  return (
    <Div className={cn(card({ variant, className }))} {...rest}>
      {title && <Div className={cn(cardHeader({ className: title.className }))}>{title.text}</Div>}
      {description && <Div className={cn(cardBody({ className: description.className }))}>{description.text}</Div>}
      {props.children}
    </Div>
  );
};

export default Card;
