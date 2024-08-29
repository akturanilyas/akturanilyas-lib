import { FC, useEffect, useRef, useState } from 'react';
import { AccordionProps } from './Accordion.type';
import Div from '../div/Div';
import { cn } from '../../utils';
import AccordionTitle from './AccordionTitle';
import { accordionStyle } from './Accordion.style';

export const Accordion: FC<AccordionProps> = (props) => {
  const { children, className, title, variant, defaultValue = false, ...rest } = props;
  const [isOpen, setIsOpen] = useState(defaultValue);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0';
    }
  }, [isOpen]);

  const classes = cn('flex flex-col border rounded-md', className, accordionStyle({ variant, className }));
  const contentClasses = cn('duration-1000 ease-in-out overflow-hidden', {
    'h-0': !isOpen,
    'h-auto border-t': isOpen,
  });

  return (
    <Div {...rest} className={classes}>
      <AccordionTitle isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} title={title} className={title.className} variant={variant}/>
      <Div ref={contentRef} className={contentClasses}>
        <Div className={'p-4'}>{children}</Div>
      </Div>
    </Div>
  );
};

export default Accordion;
