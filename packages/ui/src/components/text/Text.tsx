import { FC } from 'react';
import { TextProps } from './Text.type';

const Text: FC<TextProps> = (props) => {
  const { text, className, ...rest } = props;

  return (
    <span {...props} className={className} {...rest}>
      {text}
    </span>
  );
};

export default Text;
