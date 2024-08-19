import { FC } from 'react';
import { TextProps } from './Text.interface';

const Text: FC<TextProps> = (props) => {
  const { text, className, ...rest } = props;

  return (
    <span {...props} className={className} {...rest}>
      {text}
    </span>
  );
};

export default Text;
