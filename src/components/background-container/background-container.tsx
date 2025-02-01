import { PropsWithChildren } from 'react';
import './background-container.css';

export const BackgroundContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='Background'>{children}</div>;
};
