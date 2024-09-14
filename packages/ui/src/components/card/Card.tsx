import { CardProps } from './Card.type';
import { FC } from 'react';
import Div from '../div/Div';
import { cn } from '../../utils';
import { card, cardBody, cardHeader } from './Card.style';

const Card: FC<CardProps> = (props) => {
  const { className, title, description } = props;

  return (
    <Div className={cn(card({ className }))}>
      {title && <Div className={cn(cardHeader({ className }))}>{title.text}</Div>}
      {description && <Div className={cn(cardBody({ className }))}>{description.text}</Div>}
    </Div>
  );
};

export default Card;
