import { CSSProperties } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface CheckboxInputProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  style?: CSSProperties;
}
