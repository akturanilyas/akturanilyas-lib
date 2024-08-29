import { FC } from 'react';
import { AccordionTitleProps } from './AccordionTitle.type';
import { cn } from '../../utils';
import { RiArrowDownSLine } from 'react-icons/ri';
import Button from '../button/Button';

const AccordionTitle: FC<AccordionTitleProps> = (props) => {
  const { title, children, className, isOpen, variant, ...rest } = props;

  const classes = cn(
    `
  flex-row items-center 
  justify-between w-full p-4 
  `,
    className,
  );

  return (
    <Button variant={variant} {...rest} className={classes}>
      {children || (
        <>
          <h4 className={cn('text-lg font-bold', title?.className)}>{title?.text}</h4>
          <div className={cn('transition-transform duration-300', isOpen ? 'rotate-180' : 'rotate-0')}>
            <RiArrowDownSLine />
          </div>
        </>
      )}
    </Button>
  );
};

export default AccordionTitle;
