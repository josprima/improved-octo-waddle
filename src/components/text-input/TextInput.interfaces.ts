import { CSSProperties, HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface TextInputProps {
  name: string;
  id: string;
  label: string;
  register: UseFormRegister<any>;
  isError?: boolean | undefined;
  type?: HTMLInputTypeAttribute;
  style?: CSSProperties;
}
