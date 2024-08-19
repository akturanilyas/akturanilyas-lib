import { FC, useEffect, useRef, useState } from 'react';
import { AccordionProps } from './Accordion.type';
import Div from '../div/Div';
import { cn } from '../../utils';
import AccordionTitle from './AccordionTitle';

export const Accordion: FC<AccordionProps> & {} = (props) => {
  const { children, className, title, ...rest } = props;
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isVisible ? `${contentRef.current.scrollHeight}px` : '0';
    }
  }, [isVisible]);

  const classes = cn('flex flex-col border rounded-md', className);
  const contentClasses = cn('duration-1000 ease-in-out overflow-hidden', {
    'h-0': !isVisible,
    'h-auto border-t': isVisible,
  });

  return (
    <Div {...rest} className={classes}>
      <AccordionTitle onClick={() => setIsVisible((prev) => !prev)} title={title} className={title.className} />
      <Div ref={contentRef} className={contentClasses}>
        <Div className={'p-4'}>{children}</Div>
      </Div>
    </Div>
  );
};

export default Accordion;
