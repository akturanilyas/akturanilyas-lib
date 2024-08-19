import { FC } from 'react';
import { AccordionBodyProps } from './AccordionBody.type';
import Div from '../div/Div';

const AccordionBody: FC<AccordionBodyProps> = (props) => {
  const { children } = props;

  return <Div>{children}</Div>;
};

export default AccordionBody;
