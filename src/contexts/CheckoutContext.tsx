import { createContext, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  CheckoutProviderProps,
  FormDataContextValueType,
  FormDataType,
} from './CheckoutContext.interfaces';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const DEFAULT_CURRENT_STEP = 1;
const PHONE_NUMBER_REGEX = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;

const INITIAL_FORM_DATA: FormDataType = {
  address: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
  email: '',
  phoneNumber: '',
  shipment: '',
  paymentType: '',
  sendAsDropshipper: false,
};

const deliveryFormSchema = yup
  .object({
    address: yup.string().max(120).required(),
    email: yup.string().email(),
    phoneNumber: yup.string().min(6).max(20).matches(PHONE_NUMBER_REGEX),
  })
  .required();

const paymentFormSchema = yup
  .object({
    shipment: yup.string().required(),
    paymentType: yup.string().required(),
  })
  .required();

const dropshipperFormSchema = yup
  .object({
    dropshipperName: yup.string().required(),
    dropshipperPhoneNumber: yup.string().min(6).max(20).matches(PHONE_NUMBER_REGEX).required(),
  })
  .required();

const CheckoutContext = createContext<FormDataContextValueType | undefined>(undefined);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(DEFAULT_CURRENT_STEP);
  const [steps] = useState([
    {
      label: t('delivery'),
      id: 'step-1',
      backButtonText: t('backToCart'),
    },
    {
      label: t('payment'),
      id: 'step-2',
      backButtonText: t('backToDelivery'),
    },
    {
      label: t('finish'),
      id: 'step-3',
    },
  ]);
  const [schema, setSchema] = useState<any>(deliveryFormSchema);

  const {
    register,
    formState: { errors, dirtyFields, isValid },
    getValues,
    reset,
    handleSubmit,
  } = useForm<FormDataType>({
    mode: 'all',
    defaultValues: INITIAL_FORM_DATA,
    resolver: yupResolver(schema),
  });

  const handleOnClickBack = () => {
    if (currentStep === 1) {
      return;
    }

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleOnFormSubmit = () => {
    if (currentStep === steps.length) {
      setCurrentStep(DEFAULT_CURRENT_STEP);
      reset();
      return;
    }

    if (!isValid) {
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (currentStep === 2) {
      setSchema(paymentFormSchema);
      return;
    }

    if (currentStep === 1 && getValues('sendAsDropshipper')) {
      setSchema(deliveryFormSchema.concat(dropshipperFormSchema));
    } else {
      setSchema(deliveryFormSchema);
    }
  }, [currentStep, getValues('sendAsDropshipper')]);

  const value = {
    register,
    errors,
    dirtyFields,
    isValid,
    getValues,
    handleOnFormSubmit: handleSubmit(handleOnFormSubmit),
    handleOnClickBack,
    steps,
    currentStep,
  };

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
