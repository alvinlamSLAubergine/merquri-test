import { PropsWithChildren } from 'react';
import './typography.css';

interface Props extends PropsWithChildren {
  variant?: 'normal' | 'bold' | 'large';
  color?: 'primary' | 'secondary' | 'purple';
}

export const Typography: React.FC<Props> = ({ variant = 'normal', color = 'primary', children }) => {
  const variantName = {
    ['normal']: 'Normal',
    ['bold']: 'Bold',
    ['large']: 'Large',
  }[variant];

  const colorName = {
    ['primary']: 'Primary',
    ['secondary']: 'Secondary',
    ['purple']: 'Purple',
  }[color];

  const className = `Typography ${variantName} ${colorName}`;

  return <div className={className}>{children}</div>;
};
