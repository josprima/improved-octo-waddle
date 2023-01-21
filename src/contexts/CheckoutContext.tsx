import { createContext, useContext, useState } from 'react';
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

const INITIAL_FORM_DATA: FormDataType = {
  address: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
  email: '',
  phoneNumber: '',
};

const schema = yup
  .object({
    address: yup.string().max(120).required(),
    email: yup.string().email().required(),
    phoneNumber: yup
      .string()
      .min(6)
      .max(20)
      .matches(/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/),
  })
  .required();

const CheckoutContext = createContext<FormDataContextValueType | undefined>(undefined);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const { t } = useTranslation();

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
