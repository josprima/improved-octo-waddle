import { CSSProperties, ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface SelectInputProps {
  name: string;
  options: {
    label: string | ReactElement;
    value: string;
  }[];
  register: UseFormRegister<any>;
  style?: CSSProperties;
}
