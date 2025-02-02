import { PropsWithChildren } from 'react';
import './typography.css';

interface Props extends PropsWithChildren {
  variant?: 'normal' | 'bold' | 'large' | 'subtitle';
  color?: 'primary' | 'secondary' | 'purple' | 'subtitle' | 'error';
}

export const Typography: React.FC<Props> = ({ variant = 'normal', color = 'primary', children }) => {
  const variantName = {
    ['normal']: 'Normal',
    ['bold']: 'Bold',
    ['large']: 'Large',
    ['subtitle']: 'Subtitle',
  }[variant];

  const colorName = {
    ['primary']: 'Primary',
    ['secondary']: 'Secondary',
    ['purple']: 'Purple',
    ['subtitle']: 'SubtitleColor',
    ['error']: 'Error',
  }[color];

  const className = `Typography ${variantName} ${colorName}`;

  return <div className={className}>{children}</div>;
};
