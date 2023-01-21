import { CSSProperties } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface SelectInputProps {
  name: string;
  options: {
    label?: string;
    value: string;
    valueLabel?: string;
  }[];
  register: UseFormRegister<any>;
  style?: CSSProperties;
}
