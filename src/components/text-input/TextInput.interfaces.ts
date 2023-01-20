import { UseFormRegister } from 'react-hook-form';

export interface TextInputProps {
  name: string;
  id: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  isError?: boolean | undefined;
}
