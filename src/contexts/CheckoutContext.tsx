import { createContext, useContext, useState } from 'react';
import {
  CheckoutProviderProps,
  FormDataContextValueType,
  FormDataType,
} from './CheckoutContext.interfaces';

const initialFormData: FormDataType = {
  address: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
  email: '',
  phoneNumber: '',
};

const CheckoutContext = createContext<FormDataContextValueType | undefined>(undefined);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const value = { formData, setFormData };

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  if (context === undefined) {
    throw new Error('useCheckout must be used within CheckoutProvider');
  }

  return context;
};

export { CheckoutProvider, useCheckout };
