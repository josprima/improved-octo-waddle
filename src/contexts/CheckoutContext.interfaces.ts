import { ReactElement } from 'react';
import {
  FieldErrorsImpl,
  UseFormGetValues,
  UseFormRegister,
  FieldNamesMarkedBoolean,
} from 'react-hook-form';

export interface CheckoutProviderProps {
  children: ReactElement;
}

export type FormDataType = {
  email: string;
  phoneNumber: string;
  address: string;
  dropshipperName: string;
  dropshipperPhoneNumber: string;
  shipment: string;
  paymentType: string;
  sendAsDropshipper: boolean;
};

export type FormDataContextValueType = {
  register: UseFormRegister<FormDataType>;
  errors: Partial<FieldErrorsImpl<FormDataType>>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<FormDataType>>>;
  isValid: boolean;
  getValues: UseFormGetValues<FormDataType>;
  handleOnFormSubmit: () => void;
  handleOnClickBack: () => void;
  steps: {
    label: string;
    id: string;
    backButtonText?: string | undefined;
  }[];
  currentStep: number;
  checkoutData: {
    totalItem: number;
    costOfGoods: number;
    dropshippingFee: number;
    shipmentFee: number;
  };
};
