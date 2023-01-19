import { ReactElement } from 'react';
import { CSSProperties } from 'styled-components';

export type ButtonVariantType = 'primary' | 'secondary';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: ReactElement | ReactElement[] | string | undefined;
  style?: CSSProperties;
  variant?: ButtonVariantType;
}
