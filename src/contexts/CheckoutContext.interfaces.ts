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

type CheckoutDataType = {
  totalItem: number;
  costOfGoods: number;
  dropshippingFee: number;
  shipmentFee: number;
  deliveryEstimation: string;
  orderID: string;
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
  checkoutData: CheckoutDataType;
};

export type PersistedDataType = {
  currentStep: number;
  checkoutData: CheckoutDataType;
  formValues: FormDataType;
};
