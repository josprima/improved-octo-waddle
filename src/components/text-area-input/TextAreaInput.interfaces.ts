import { CSSProperties } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface TextAreaInputProps {
  name: string;
  id: string;
  label: string;
  register: UseFormRegister<any>;
  isError?: boolean | undefined;
  style?: CSSProperties;
  cols?: number;
}
