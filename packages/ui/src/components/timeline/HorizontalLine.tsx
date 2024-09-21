import { FC } from 'react';
import Div from '../div/Div';

export const HorizontalLine: FC<{
  className: string;
}> = ({ className }) => <Div className={`absolute left-[22px] h-[calc(100%+16px)] w-1 bg-green-400 ${className}`} />;
