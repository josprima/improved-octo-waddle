import { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  CheckoutProviderProps,
  FormDataContextValueType,
  FormDataType,
} from './CheckoutContext.interfaces';

const INITIAL_FORM_DATA: FormDataType = {
  address: '',
  dropshipperName: '',
  dropshipperPhoneNumber: '',
  email: '',
  phoneNumber: '',
};

const DEFAULT_CURRENT_STEP = 1;

const CheckoutContext = createContext<FormDataContextValueType | undefined>(undefined);

const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors, dirtyFields, isValid },
    getValues,
  } = useForm<FormDataType>({
    mode: 'all',
    defaultValues: INITIAL_FORM_DATA,
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
    handleOnFormSubmit,
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
