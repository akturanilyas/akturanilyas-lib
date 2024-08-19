import { FC } from 'react';
import { AccordionTitleProps } from './AccordionTitle.type';
import { cn } from '../../utils';
import { RiArrowDownSLine } from 'react-icons/ri';
import Button from '../button/Button';

const AccordionTitle: FC<AccordionTitleProps> = (props) => {
  const { title, children, className, ...rest } = props;

  const classes = cn(
    `
  flex-row items-center 
  justify-between w-full p-4 
  `,
    className,
  );

  return (
    <Button className={classes} {...rest}>
      {children || (
        <>
          <h4 className={cn('text-lg font-bold', title?.className)}>{title?.text}</h4>
          <RiArrowDownSLine />
        </>
      )}
    </Button>
  );
};

export default AccordionTitle;
