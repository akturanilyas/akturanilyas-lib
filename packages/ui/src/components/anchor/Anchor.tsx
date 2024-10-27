import { FC } from 'react';
import { AnchorProps } from './Anchor.type';

export const Anchor:FC<AnchorProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <a {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
