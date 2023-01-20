import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface CheckoutProviderProps {
  children: ReactElement;
}

export type FormDataType = {
  email: string;
  phoneNumber: string;
  address: string;
  dropshipperName: string;
  dropshipperPhoneNumber: string;
};

export type FormDataContextValueType = {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
};
